import { Button, Group, Select, Stack, TextInput } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import useGetDivision from '../../hooks/useGetDivision';
import usePatchDivision from '../../hooks/usePatchDivision';

const DivisionForm = ({ id }: { id: number }) => {
	const query = useGetDivision(id);
	const mutation = usePatchDivision(id);

	const form = useForm({
		mode: 'controlled',
		initialValues: {
			id: 0,
			division_name: '',
			division_code: '',
			status: '',
		},
	});

	useShallowEffect(() => {
		if (query.data?.data) {
			form.setValues({
				id: query.data.data.id,
				division_name: query.data.data.division_name,
				division_code: query.data.data.division_code,
				status: query.data.data.status,
			});
		}
	}, [query.data]);

	const handleEdit = (values: typeof form.values) => {
		values.division_code = values.division_code.toUpperCase();
		mutation.mutate(values);
		modals.closeAll();
	};

	return (
		<>
			<form onSubmit={form.onSubmit(handleEdit)}>
				<Stack gap={'md'}>
					<TextInput
						label='ID'
						disabled={query.isFetching || query.isError ? true : false}
						key={form.key('id')}
						{...form.getInputProps('id')}
					/>
					<TextInput
						label='Division Name'
						disabled={query.isFetching || query.isError ? true : false}
						key={form.key('division_name')}
						{...form.getInputProps('division_name')}
					/>
					<TextInput
						label='Division Code'
						disabled={query.isFetching || query.isError ? true : false}
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
						disabled={query.isFetching || query.isError ? true : false}
						key={form.key('status')}
						{...form.getInputProps('status')}
					/>

					<Group grow>
						<Button
							type='submit'
							variant='subtle'
							disabled={query.isFetching || query.isError ? true : false}
						>
							EDIT
						</Button>
						<Button
							type='button'
							variant='subtle'
							color='red'
							onClick={() => modals.closeAll()}
						>
							CANCEL
						</Button>
					</Group>
				</Stack>
			</form>
		</>
	);
};

export default DivisionForm;
