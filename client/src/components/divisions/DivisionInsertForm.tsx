import { Button, Group, Select, Stack, TextInput } from '@mantine/core';
import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import usePostDivision from '../../hooks/usePostDivision';

const DivisionInsertForm = () => {
	const mutation = usePostDivision();

	const form = useForm({
		mode: 'uncontrolled',
		initialValues: {
			division_name: '',
			division_code: '',
			status: 'A',
		},
		validate: {
			division_name: isNotEmpty(),
			division_code: isNotEmpty() && hasLength({ max: 5 }),
			status: (value) => {
				if (value !== 'A' && value !== 'I') return null;
			},
		},
	});

	const closeModal = () => {
		modals.closeAll();
	};

	const handleSubmit = (values: typeof form.values) => {
		values.division_code = values.division_code.toUpperCase();
		mutation.mutate(values);
		closeModal();
	};

	return (
		<form onSubmit={form.onSubmit(handleSubmit)}>
			<Stack gap={'md'}>
				<TextInput
					label='Division Name'
					key={form.key('division_name')}
					{...form.getInputProps('division_name')}
				/>
				<TextInput
					label='Division Code'
					key={form.key('division_code')}
					{...form.getInputProps('division_code')}
				/>
				<Select
					label='Status'
					data={[
						{ value: 'A', label: 'ACTIVE' },
						{ value: 'I', label: 'INACTIVE' },
					]}
					checkIconPosition='right'
					key={form.key('status')}
					{...form.getInputProps('status')}
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

export default DivisionInsertForm;
