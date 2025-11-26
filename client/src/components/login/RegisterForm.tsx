import {
	Button,
	Stack,
	TextInput,
	PasswordInput,
	Select,
	Loader,
} from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';
import useGetSectionOptions from '../../hooks/useGetSectionOptions';
import flattenSectionOptions from '../../utils/flattenSectionOptions';
import usePostRegister from '../../hooks/usePostRegister';

const RegisterForm = () => {
	const form = useForm({
		mode: 'uncontrolled',
		initialValues: {
			first_name: '',
			middle_name: '',
			last_name: '',
			position: '',
			section_id: '0',
			username: '',
			password: '',
		},
		validate: {
			first_name: hasLength({ min: 3 }),
			last_name: hasLength({ min: 3 }),
			position: hasLength({ min: 3 }),
			section_id: (value) => (value !== '0' ? null : null),
			username: hasLength({ min: 3 }),
			password: hasLength({ min: 8 }),
		},
	});

	const sections = useGetSectionOptions();
	const sectionOptions = flattenSectionOptions(sections?.data?.data ?? []);

	const mutation = usePostRegister();

	const handleSubmit = (values: typeof form.values) => {
		const section_id = Number(values.section_id);
		const position = values.position.toUpperCase();
		const data = { ...values, section_id, position };
		mutation.mutate(data);
		if (mutation.isSuccess) {
			form.reset();
			mutation.reset();
		}
	};

	return (
		<form
			onSubmit={form.onSubmit(handleSubmit)}
			onReset={form.onReset}
		>
			<Stack
				mt={'2rem'}
				gap={'lg'}
			>
				<TextInput
					label='First Name'
					key={form.key('first_name')}
					{...form.getInputProps('first_name')}
					disabled={mutation.isPending ? true : false}
				/>
				<TextInput
					label='Middle Name'
					key={form.key('middle_name')}
					{...form.getInputProps('middle_name')}
					disabled={mutation.isPending ? true : false}
				/>
				<TextInput
					label='Last Name'
					key={form.key('last_name')}
					{...form.getInputProps('last_name')}
					disabled={mutation.isPending ? true : false}
				/>
				<TextInput
					label='Position'
					key={form.key('position')}
					{...form.getInputProps('position')}
					disabled={mutation.isPending ? true : false}
				/>
				<Select
					label='Section'
					key={form.key('section_id')}
					{...form.getInputProps('section_id')}
					nothingFoundMessage='No sections found.'
					data={sectionOptions ?? []}
					clearable
					searchable
					allowDeselect
					checkIconPosition='right'
					disabled={mutation.isPending ? true : false}
				/>
				<TextInput
					label='Username'
					key={form.key('username')}
					{...form.getInputProps('username')}
					disabled={mutation.isPending ? true : false}
				/>
				<PasswordInput
					label='Password'
					key={form.key('password')}
					{...form.getInputProps('password')}
					disabled={mutation.isPending ? true : false}
				/>
				<Button
					type='submit'
					variant='light'
					disabled={mutation.isPending ? true : false}
				>
					{mutation.isPending ? <Loader type='dots' /> : 'REGISTER'}
				</Button>
				<Button
					type='reset'
					variant='light'
					color='red'
					disabled={mutation.isPending ? true : false}
				>
					{mutation.isPending ? <Loader type='dots' /> : 'CLEAR'}
				</Button>
			</Stack>
		</form>
	);
};

export default RegisterForm;
