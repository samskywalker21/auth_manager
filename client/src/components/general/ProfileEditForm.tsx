import { useState } from 'react';
import {
	Button,
	Loader,
	PasswordInput,
	Select,
	Stack,
	TextInput,
} from '@mantine/core';
import type { ProfileEdit } from '../../types';
import { useForm, isNotEmpty, hasLength } from '@mantine/form';
import useGetSectionOptions from '../../hooks/useGetSectionOptions';
import flattenSectionOptions from '../../utils/flattenSectionOptions';
import usePatchProfile from '../../hooks/usePatchProfile';

const ProfileEditForm = ({ profile }: { profile: ProfileEdit }) => {
	const [displayOnly, setDisplayOnly] = useState(true);

	const sections = useGetSectionOptions();
	const section_options = flattenSectionOptions(sections.data?.data ?? []);

	const mutate = usePatchProfile(profile.id);

	const form = useForm({
		name: 'edit-form',
		mode: 'controlled',
		initialValues: {
			first_name: profile.first_name || '',
			middle_name: profile.middle_name || '',
			last_name: profile.last_name || '',
			position: profile.position || '',
			section_id: `${profile.section_id}` || '',
			username: profile.username || '',
			password: '',
			confirm_password: '',
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
		},
	});

	const toggleForm = () => {
		setDisplayOnly((prev) => !prev);
	};

	const handleSubmit = (values: typeof form.values) => {
		const cleanValues: Partial<typeof form.values> = values;
		if (cleanValues.password === '') {
			delete cleanValues.password;
		}
		if (cleanValues.middle_name === '') {
			delete cleanValues.middle_name;
		}
		const section_id = Number(cleanValues.section_id);
		mutate.mutate({ ...cleanValues, section_id });
		toggleForm();
	};

	return (
		<>
			<form
				onSubmit={form.onSubmit(handleSubmit)}
				onReset={form.onReset}
			>
				<Stack gap={'sm'}>
					<TextInput
						label='First Name'
						disabled={displayOnly || mutate.isPending}
						key={form.key('first_name')}
						{...form.getInputProps('first_name')}
					/>
					<TextInput
						label='Middle Name'
						disabled={displayOnly || mutate.isPending}
						key={form.key('middle_name')}
						{...form.getInputProps('middle_name')}
					/>
					<TextInput
						label='Last Name'
						disabled={displayOnly || mutate.isPending}
						key={form.key('last_name')}
						{...form.getInputProps('last_name')}
					/>
					<TextInput
						label='Position'
						disabled={displayOnly || mutate.isPending}
						key={form.key('position')}
						{...form.getInputProps('position')}
					/>
					<Select
						label='Section'
						disabled={displayOnly || mutate.isPending}
						searchable
						checkIconPosition='right'
						nothingFoundMessage='No sections found.'
						key={form.key('section_id')}
						{...form.getInputProps('section_id')}
						data={section_options ?? []}
					/>
					<TextInput
						label='Username'
						disabled={displayOnly || mutate.isPending}
						key={form.key('username')}
						{...form.getInputProps('username')}
					/>
					<PasswordInput
						label='Password'
						disabled={displayOnly || mutate.isPending}
						key={form.key('password')}
						{...form.getInputProps('password')}
					/>
				</Stack>
				{displayOnly ? null : (
					<Button
						type='submit'
						variant='light'
						fullWidth
						mt={'md'}
					>
						{mutate.isPending ? <Loader type='dots' /> : 'SAVE'}
					</Button>
				)}
			</form>
			{displayOnly ? (
				<Button
					variant='light'
					fullWidth
					onClick={toggleForm}
				>
					EDIT
				</Button>
			) : null}
			<Button
				type='reset'
				variant='light'
				color='red'
				disabled={displayOnly || mutate.isPending}
				fullWidth
				onClick={toggleForm}
			>
				{mutate.isPending ? <Loader type='dots' /> : 'CANCEL'}
			</Button>
		</>
	);
};

export default ProfileEditForm;
