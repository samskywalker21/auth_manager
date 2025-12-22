import {
	Group,
	Button,
	Stack,
	TextInput,
	Select,
	PasswordInput,
	Text,
	Paper,
} from '@mantine/core';
import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import useGetSectionOptions from '../../hooks/useGetSectionOptions';
import flattenSectionOptions from '../../utils/flattenSectionOptions';
import useGetProfile2 from '../../hooks/useGetProfile2';
import { useEffect } from 'react';
import usePatchProfile from '../../hooks/usePatchProfile';

const ProfileEditForm = ({ id }: { id: number }) => {
	const sections = useGetSectionOptions();
	const sections_options = flattenSectionOptions(sections.data?.data ?? []);
	const profile = useGetProfile2(id);
	const editProfile = usePatchProfile(id);

	const form = useForm({
		mode: 'controlled',
		initialValues: {
			first_name: '',
			middle_name: '',
			last_name: '',
			position: '',
			section_id: '',
			username: '',
			password: '',
			confirm_password: '',
			status: 'I',
			is_admin: 'F',
		},
		validate: {
			first_name: isNotEmpty() && hasLength({ min: 2 }),
			last_name: isNotEmpty() && hasLength({ min: 2 }),
			position: isNotEmpty() && hasLength({ min: 2 }),
			section_id: isNotEmpty() && hasLength({ min: 1, max: 1 }),
			username: isNotEmpty() && hasLength({ min: 6 }),
			password: (value) => {
				if (!value) return null;
				return value.length < 6 ? null : null;
			},
			confirm_password: (value, values) => {
				return value !== values.password ? 'Password does not match' : null;
			},
			status: isNotEmpty() && hasLength({ min: 1, max: 1 }),
			is_admin: isNotEmpty() && hasLength({ min: 1, max: 1 }),
		},
	});

	useEffect(() => {
		if (profile.data) {
			const is_admin = profile.data?.data === false ? 'F' : 'T';
			const section_id = String(profile.data?.data.section_id);
			form.setValues({
				first_name: profile.data.data.first_name,
				middle_name: profile.data.data.middle_name,
				last_name: profile.data.data.last_name,
				position: profile.data.data.position,
				section_id,
				username: profile.data.data.username,
				status: profile.data.data.status,
				is_admin,
			});
		}
	}, [profile.data]);

	const handleSubmit = (values: typeof form.values) => {
		const section_id = Number(values.section_id);
		const is_admin = values.is_admin === 'T' ? true : false;
		const passwordCheck = values.password === '' ? null : values.password;
		if (passwordCheck) {
			const { confirm_password, ...rest } = values;
			editProfile.mutate({ ...rest, section_id, is_admin });
		}
		const { confirm_password, password, ...rest } = values;
		editProfile.mutate({ ...rest, section_id, is_admin });
		form.reset();
		closeModal();
	};

	const closeModal = () => {
		modals.closeAll();
	};

	return (
		<form onSubmit={form.onSubmit(handleSubmit)}>
			<Stack>
				<Paper
					radius='md'
					p='sm'
					bg='green'
				>
					<Text fw={'bold'}>Profile</Text>
				</Paper>
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

				<Paper
					radius='md'
					p='sm'
					bg='green'
				>
					<Text fw={'bold'}>Change Password</Text>
				</Paper>
				<Group grow>
					<PasswordInput
						label='New Password'
						key={form.key('password')}
						{...form.getInputProps('password')}
					/>
					<PasswordInput
						label='Confirm Password'
						key={form.key('confirm_password')}
						{...form.getInputProps('confirm_password')}
					/>
				</Group>
				<Group grow>
					<Button
						variant='subtle'
						type='submit'
					>
						EDIT
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

export default ProfileEditForm;
