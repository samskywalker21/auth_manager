import { Stack, TextInput, Select, Group, Button } from '@mantine/core';
import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import useGetDivisions from '../../hooks/useGetDivisions';
import flattenDivisionOptions from '../../utils/flattenDivisionOptions';
import usePostSection from '../../hooks/usePostSection';

const SectionInsertForm = () => {
	const mutation = usePostSection();

	const form = useForm({
		mode: 'uncontrolled',
		initialValues: {
			section_name: '',
			section_code: '',
			division_id: '',
			status: 'A',
		},
		validate: {
			section_name: isNotEmpty() && hasLength({ min: 3 }),
			section_code: isNotEmpty() && hasLength({ min: 3, max: 5 }),
			division_id: isNotEmpty() && hasLength({ min: 1, max: 1 }),
			status: isNotEmpty() && hasLength({ max: 1 }),
		},
	});

	const divisions = useGetDivisions();
	const divisionOptions = flattenDivisionOptions(divisions.data?.data ?? []);

	const closeModal = () => {
		modals.closeAll();
	};

	const onSubmitHandler = (values: typeof form.values) => {
		const division_id = Number(values.division_id);
		mutation.mutate({ ...values, division_id });
		form.reset();
		closeModal();
	};

	return (
		<form onSubmit={form.onSubmit(onSubmitHandler)}>
			<Stack>
				<TextInput
					label='Section Name'
					key={form.key('section_name')}
					{...form.getInputProps('section_name')}
				/>
				<TextInput
					label='Section Code'
					key={form.key('section_code')}
					{...form.getInputProps('section_code')}
				/>
				<Select
					label='Division'
					data={divisionOptions ?? []}
					key={form.key('division_id')}
					{...form.getInputProps('division_id')}
					searchable
					checkIconPosition='right'
				/>
				<Select
					label='Status'
					key={form.key('status')}
					{...form.getInputProps('status')}
					data={[
						{ value: 'A', label: 'ACTIVE' },
						{ value: 'I', label: 'INACTIVE' },
					]}
					checkIconPosition='right'
				/>
				<Group grow>
					<Button
						type='submit'
						variant='subtle'
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

export default SectionInsertForm;
