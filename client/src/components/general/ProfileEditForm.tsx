import { useState } from 'react';
import {
	Button,
	Loader,
	PasswordInput,
	Select,
	TextInput,
} from '@mantine/core';
import type { ProfileEdit } from '../../types';
import { useForm } from '@mantine/form';
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
			section_id: String(profile.section_id) || '0',
			username: profile.username || '',
			password: '',
			is_admin: profile.is_admin || false,
		},
		validate: {
			first_name: (value) => {
				return value !== profile.first_name
					? value.length < 3
						? true
						: null
					: null;
			},
			middle_name: (value) => {
				if (form.isDirty('middle_name')) {
					return value !== profile.middle_name
						? value.length < 3
							? true
							: null
						: null;
				}
			},
			last_name: (value) => {
				return value !== profile.last_name
					? value.length < 3
						? true
						: null
					: null;
			},
			position: (value) => {
				return value !== profile.position
					? value.length < 3
						? true
						: null
					: null;
			},
			section_id: (value) => {
				return value === '0' ? true : null;
			},
			username: (value) => {
				return value !== profile.username
					? value.length < 3
						? true
						: null
					: null;
			},
			password: (value) => {
				if (form.isDirty('password')) {
					return value.length < 3 ? true : null;
				}
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
