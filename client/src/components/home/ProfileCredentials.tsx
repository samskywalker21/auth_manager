import { useState, useEffect } from 'react';
import {
	Button,
	Group,
	Paper,
	Stack,
	Text,
	TextInput,
	PasswordInput,
} from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';
import type { ProfileData } from '../../types';
import usePatchProfile from '../../hooks/usePatchProfile';
import useChangePassword from '../../hooks/useChangePassword';

const ProfileCredentials = ({ data }: { data: Partial<ProfileData> }) => {
	const [edit1, setEdit1] = useState(false);
	const [edit2, setEdit2] = useState(false);
	const profile_patch = usePatchProfile(data.id ?? 0);
	const changePassword = useChangePassword();

	const form1 = useForm({
		mode: 'controlled',
		initialValues: {
			username: '',
		},
		validate: {
			username: hasLength({ min: 6 }),
		},
	});

	const form2 = useForm({
		mode: 'uncontrolled',
		initialValues: {
			old_password: '',
			password: '',
			confirm_password: '',
		},
		validate: {
			// old_password: (value, values) => {
			// 	if (values.password) {
			// 		return value.length > 0;
			// 	}
			// 	return true;
			// },
			password: (value, values) => {
				if (!value) return null;
				if (value?.length > 3) {
					return value !== values.confirm_password
						? 'Password does not match'
						: null;
				}
			},
			confirm_password: (value, values) => {
				if (!value) return null;
				if (value?.length > 3) {
					return value !== values.password ? 'Password does not match' : null;
				}
			},
		},
	});

	useEffect(() => {
		if (data) {
			form1.setValues({ username: data.username });
		}
	}, [data]);

	const toggleEdit1 = () => {
		setEdit1((prev) => !prev);
	};

	const toggleEdit2 = () => {
		setEdit2((prev) => !prev);
	};

	const handleForm1Submit = (values: typeof form1.values) => {
		if (edit1) {
			profile_patch.mutate(values);
			toggleEdit1();
		} else {
			toggleEdit1();
		}
	};

	const handleForm2Submit = (values: typeof form2.values) => {
		if (edit2) {
			if (
				values.confirm_password.length >= 1 &&
				values.old_password.length >= 1 &&
				values.password.length >= 1
			)
				changePassword.mutate({
					id: data.id ?? 0,
					old_password: values.old_password,
					password: values.password,
				});
			form2.reset();
			toggleEdit2();
		} else {
			toggleEdit2();
		}
	};

	return (
		<Stack>
			<Paper
				p='sm'
				bg='green'
			>
				<Text fw={'bold'}>Credentials</Text>
			</Paper>
			<Group grow>
				<form onSubmit={form1.onSubmit(handleForm1Submit)}>
					<Stack>
						<TextInput
							label='Username'
							withAsterisk
							disabled={!edit1}
							key={form1.key('username')}
							{...form1.getInputProps('username')}
						/>
						<Group>
							<Button
								variant='subtle'
								w={'25%'}
								miw={'90px'}
								type='submit'
							>
								EDIT
							</Button>
							<Button
								variant='subtle'
								color='red'
								w={'25%'}
								miw={'90px'}
								onClick={() => {
									if (edit1) {
										toggleEdit1();
									}
								}}
							>
								CANCEL
							</Button>
						</Group>
					</Stack>
				</form>
				<form onSubmit={form2.onSubmit(handleForm2Submit)}>
					<Stack>
						<PasswordInput
							label='Old Password'
							disabled={!edit2}
							key={form2.key('old_password')}
							{...form2.getInputProps('old_password')}
						/>
						<PasswordInput
							label='New Password'
							disabled={!edit2}
							key={form2.key('password')}
							{...form2.getInputProps('password')}
						/>
						<PasswordInput
							label='Confirm Password'
							disabled={!edit2}
							key={form2.key('confirm_password')}
							{...form2.getInputProps('confirm_password')}
						/>
						<Group w={'50%'}>
							<Button
								variant='subtle'
								w={'25%'}
								miw={'90px'}
								type='submit'
							>
								EDIT
							</Button>
							<Button
								variant='subtle'
								color='red'
								w={'25%'}
								miw={'90px'}
								onClick={() => {
									if (edit2) {
										toggleEdit2();
									}
								}}
							>
								CANCEL
							</Button>
						</Group>
					</Stack>
				</form>
			</Group>
		</Stack>
	);
};

export default ProfileCredentials;
