import {
	Stack,
	TextInput,
	Select,
	Button,
	Group,
	Paper,
	Text,
} from '@mantine/core';
import { useForm, isNotEmpty, hasLength } from '@mantine/form';
import useGetSection from '../../hooks/useGetSection';
import { modals } from '@mantine/modals';
import { useShallowEffect } from '@mantine/hooks';
import flattenDivisionOptions from '../../utils/flattenDivisionOptions';
import useGetDivisions from '../../hooks/useGetDivisions';
import usePatchSection from '../../hooks/usePatchSection';

const SectionEditForm = ({ id }: { id: number }) => {
	const query = useGetSection(id);
	const divisions = useGetDivisions();
	const divisionOptions = flattenDivisionOptions(divisions.data?.data ?? []);
	const mutation = usePatchSection(id);

	const form = useForm({
		mode: 'controlled',
		initialValues: {
			id: '',
			section_name: '',
			section_code: '',
			division_id: '',
			status: '',
		},
		validate: {
			section_name: isNotEmpty() && hasLength({ min: 3 }),
			section_code: isNotEmpty() && hasLength({ min: 3, max: 5 }),
			division_id: isNotEmpty() && hasLength({ min: 1, max: 1 }),
			status: isNotEmpty() && hasLength({ max: 1 }),
		},
	});

	useShallowEffect(() => {
		if (query.data?.data && divisions.data?.data)
			form.setValues({
				id: query.data.data.id,
				section_name: query.data.data.section_name,
				section_code: query.data.data.section_code,
				division_id: String(query.data.data.division_id),
				status: query.data.data.status,
			});
	}, [query.data?.data, divisions.data?.data]);

	const closeModal = () => {
		modals.closeAll();
	};

	const editSectionHandler = (values: typeof form.values) => {
		const division_id = Number(values.division_id);
		mutation.mutate({ ...values, division_id });
		closeModal();
	};

	return (
		<form onSubmit={form.onSubmit(editSectionHandler)}>
			<Stack>
				<Paper
					radius='md'
					p='sm'
					bg='green'
				>
					<Text fw={'bold'}>Edit Section</Text>
				</Paper>
				<TextInput
					label='ID'
					disabled
					key={form.key('id')}
					{...form.getInputProps('id')}
				/>
				<TextInput
					label='Section Name'
					disabled={query.isLoading && divisions.isLoading ? true : false}
					key={form.key('section_name')}
					{...form.getInputProps('section_name')}
				/>
				<TextInput
					label='Section Code'
					disabled={query.isLoading && divisions.isLoading ? true : false}
					key={form.key('section_code')}
					{...form.getInputProps('section_code')}
				/>
				<Select
					label='Division'
					disabled={query.isLoading && divisions.isLoading ? true : false}
					key={form.key('division_id')}
					data={divisionOptions}
					{...form.getInputProps('division_id')}
					checkIconPosition='right'
					allowDeselect={false}
				/>
				<Select
					label='Status'
					disabled={query.isLoading && divisions.isLoading ? true : false}
					key={form.key('status')}
					data={[
						{ value: 'A', label: 'ACTIVE' },
						{ value: 'I', label: 'INACTIVE' },
					]}
					{...form.getInputProps('status')}
					checkIconPosition='right'
				/>
				<Group grow>
					<Button
						type='submit'
						variant='subtle'
						disabled={query.isLoading && divisions.isLoading ? true : false}
					>
						EDIT
					</Button>
					<Button
						disabled={query.isLoading && divisions.isLoading ? true : false}
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

export default SectionEditForm;
