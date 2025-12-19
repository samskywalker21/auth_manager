import {
	Group,
	Button,
	Stack,
	TextInput,
	Select,
	PasswordInput,
} from '@mantine/core';
import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import useGetSectionOptions from '../../hooks/useGetSectionOptions';
import flattenSectionOptions from '../../utils/flattenSectionOptions';
import usePostRegister from '../../hooks/usePostRegister';

const ProfileInsertForm = () => {
	const sections = useGetSectionOptions();
	const sections_options = flattenSectionOptions(sections.data?.data ?? []);
	const register = usePostRegister();

	const form = useForm({
		mode: 'uncontrolled',
		initialValues: {
			first_name: '',
			middle_name: '',
			last_name: '',
			position: '',
			section_id: '',
			username: '',
			password: '',
			status: 'I',
			is_admin: 'F',
		},
		validate: {
			first_name: isNotEmpty() && hasLength({ min: 3 }),
			last_name: isNotEmpty() && hasLength({ min: 3 }),
			position: isNotEmpty() && hasLength({ min: 3 }),
			section_id: isNotEmpty() && hasLength({ min: 1, max: 1 }),
			username: isNotEmpty() && hasLength({ min: 6 }),
			password: isNotEmpty() && hasLength({ min: 3 }),
			status: isNotEmpty() && hasLength({ min: 1, max: 1 }),
			is_admin: isNotEmpty() && hasLength({ min: 1, max: 1 }),
		},
	});

	const closeModal = () => {
		modals.closeAll();
	};

	const handleSubmit = (values: typeof form.values) => {
		const is_admin = values.is_admin === 'T' ? true : false;
		register.mutate({
			...values,
			section_id: Number(values.section_id),
			is_admin,
		});
		form.reset();
		modals.closeAll();
	};

	return (
		<form onSubmit={form.onSubmit(handleSubmit)}>
			<Stack>
				<Group grow>
					<TextInput
						label='First Name'
						key={form.key('first_name')}
						{...form.getInputProps('first_name')}
					/>
					<TextInput
						label='Middle Name'
						key={form.key('middle_name')}
						{...form.getInputProps('middle_name')}
					/>
					<TextInput
						label='Last Name'
						key={form.key('last_name')}
						{...form.getInputProps('last_name')}
					/>
				</Group>
				<Group grow>
					<TextInput
						label='Position'
						key={form.key('position')}
						{...form.getInputProps('position')}
					/>
					<Select
						label='Section'
						checkIconPosition='right'
						key={form.key('section_id')}
						{...form.getInputProps('section_id')}
						data={sections_options}
						allowDeselect={false}
					/>
				</Group>
				<TextInput
					label='Username'
					key={form.key('username')}
					{...form.getInputProps('username')}
				/>
				<PasswordInput
					label='Password'
					key={form.key('password')}
					{...form.getInputProps('password')}
				/>
				<Select
					label='Access'
					checkIconPosition='right'
					key={form.key('is_admin')}
					{...form.getInputProps('is_admin')}
					data={[
						{ value: 'F', label: 'USER' },
						{ value: 'T', label: 'ADMINISTRATOR' },
					]}
					allowDeselect={false}
				/>
				<Select
					label='Status'
					checkIconPosition='right'
					key={form.key('status')}
					{...form.getInputProps('status')}
					data={[
						{ value: 'A', label: 'ACTIVE' },
						{ value: 'I', label: 'INACTIVE' },
					]}
					allowDeselect={false}
				/>
				<Group grow>
					<Button
						variant='subtle'
						type='submit'
					>
						ADD
					</Button>
					<Button
						variant='subtle'
						color='red'
						onClick={closeModal}
					>
						CANCEL
					</Button>
				</Group>
			</Stack>
		</form>
	);
};

export default ProfileInsertForm;
