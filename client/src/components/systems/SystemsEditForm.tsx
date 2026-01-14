import {
	Button,
	Group,
	Paper,
	Select,
	Stack,
	Text,
	TextInput,
} from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import useGetSystem from '../../hooks/useGetSystem';
import { useEffect } from 'react';
import usePatchSystem from '../../hooks/usePatchSystem';

const SystemsEditForm = ({ id }: { id: number }) => {
	const form = useForm({
		mode: 'controlled',
		initialValues: {
			system_name: '',
			status: 'A',
		},
		validate: {
			system_name: hasLength({ min: 3 }),
			status: hasLength({ min: 1, max: 1 }),
		},
	});

	const query = useGetSystem(id);
	const mutation = usePatchSystem(id);

	useEffect(() => {
		form.setValues({
			system_name: query.data?.data.system_name,
			status: query.data?.data.status,
		});
	}, [query.data?.data]);

	const closeModal = () => {
		modals.closeAll();
	};

	const handleSubmit = (values: typeof form.values) => {
		mutation.mutate(values);
		form.reset();
		closeModal();
	};

	return (
		<form onSubmit={form.onSubmit(handleSubmit)}>
			<Stack gap={'md'}>
				<Paper
					radius='md'
					p='sm'
					bg='green'
				>
					<Text fw={'bold'}>Edit System</Text>
				</Paper>
				<TextInput
					label='System Name'
					key={form.key('system_name')}
					{...form.getInputProps('system_name')}
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

export default SystemsEditForm;
