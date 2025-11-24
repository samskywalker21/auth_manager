import { Button, Loader, PasswordInput, Stack, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { CircleUserRound, KeyRound } from 'lucide-react';

import usePostLogin from '../../hooks/usePostLogin';

const LoginForm = () => {
	const form = useForm({
		name: 'login-form',
		mode: 'uncontrolled',
		initialValues: {
			username: '',
			password: '',
		},
		validate: {
			username: isNotEmpty(),
			password: isNotEmpty(),
		},
	});

	const mutation = usePostLogin();

	const handleSubmit = (values: typeof form.values) => {
		mutation.mutate(values);
		form.reset();
		if (mutation.isSuccess) {
			mutation.reset();
		}
	};

	return (
		<form onSubmit={form.onSubmit(handleSubmit)}>
			<Stack
				gap={'lg'}
				pt={'5rem'}
			>
				<TextInput
					label='Username'
					leftSection={<CircleUserRound size={'1rem'} />}
					key={form.key('username')}
					{...form.getInputProps('username')}
					disabled={mutation.isPending ? true : false}
				/>
				<PasswordInput
					label='Password'
					leftSection={<KeyRound size={'1rem'} />}
					key={form.key('password')}
					{...form.getInputProps('password')}
					disabled={mutation.isPending ? true : false}
				/>
				<Button
					variant='light'
					type='submit'
					disabled={mutation.isPending ? true : false}
				>
					{mutation.isPending ? <Loader type='dots' /> : 'LOG IN'}
				</Button>
			</Stack>
		</form>
	);
};

export default LoginForm;
