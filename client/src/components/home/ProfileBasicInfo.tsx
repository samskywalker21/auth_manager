import { useState } from 'react';
import {
	Button,
	Group,
	Paper,
	Select,
	Stack,
	Text,
	TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import type { ProfileData } from '../../types';
import { useEffect } from 'react';
import useGetSectionOptions from '../../hooks/useGetSectionOptions';
import flattenSectionOptions from '../../utils/flattenSectionOptions';
import usePatchProfile from '../../hooks/usePatchProfile';

const ProfileBasicInfo = ({ data }: { data: Partial<ProfileData> }) => {
	const [edit, setEdit] = useState(false);
	const sections = useGetSectionOptions();
	const section_list = flattenSectionOptions(sections.data?.data ?? []);
	const edit_profile = usePatchProfile(data.id ?? 0);

	const toggleEdit = () => {
		setEdit((prev) => !prev);
	};

	const handleEdit = (values: typeof form.values) => {
		if (edit) {
			edit_profile.mutate({ ...values, section_id: Number(values.section_id) });
			toggleEdit();
		} else {
			toggleEdit();
		}
	};

	const form = useForm({
		mode: 'controlled',
		initialValues: {
			first_name: '',
			middle_name: '',
			last_name: '',
			position: '',
			section_id: '',
		},
	});

	useEffect(() => {
		if (data) {
			form.setValues({
				...data,
				middle_name: data.middle_name ? data.middle_name : '',
				section_id: String(data.section_id ?? ''),
			});
		}
	}, [data]);

	return (
		<form onSubmit={form.onSubmit(handleEdit)}>
			<Stack>
				<Paper
					p='sm'
					bg='green'
				>
					<Text fw={'bold'}>Profile Data</Text>
				</Paper>
				<Group grow>
					<TextInput
						label='First Name'
						withAsterisk
						disabled={!edit}
						key={form.key('first_name')}
						{...form.getInputProps('first_name')}
					/>
					<TextInput
						label='Middle Name'
						disabled={!edit}
						key={form.key('middle_name')}
						{...form.getInputProps('middle_name')}
					/>
					<TextInput
						label='Last Name'
						withAsterisk
						disabled={!edit}
						key={form.key('last_name')}
						{...form.getInputProps('last_name')}
					/>
				</Group>
				<Group grow>
					<TextInput
						label='Position'
						withAsterisk
						disabled={!edit}
						key={form.key('position')}
						{...form.getInputProps('position')}
					/>
					<Select
						label='Section'
						withAsterisk
						disabled={!edit}
						data={section_list}
						key={form.key('section_id')}
						{...form.getInputProps('section_id')}
					/>
				</Group>
				<Group w={'50%'}>
					<Button
						variant='subtle'
						w={'25%'}
						type='submit'
					>
						EDIT
					</Button>
					<Button
						variant='subtle'
						color='red'
						w={'25%'}
						onClick={() => {
							if (edit) {
								toggleEdit();
							}
						}}
					>
						CANCEL
					</Button>
				</Group>
			</Stack>
		</form>
	);
};

export default ProfileBasicInfo;
