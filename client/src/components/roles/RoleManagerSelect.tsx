import { Button, Group, Select } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';
import { UserPlus } from 'lucide-react';
import useGetActiveSystems from '../../hooks/useGetActiveSystems';
import type { RoleData } from '../../types';
import usePostRole from '../../hooks/usePostRole';

const RoleManagerSelect = ({ id }: { id: number }) => {
	const systems = useGetActiveSystems();
	const mutation = usePostRole();

	const systemsList = systems.data?.data.map((row: RoleData) => {
		return {
			value: String(row.id),
			label: row.system_name,
		};
	});

	const form = useForm({
		mode: 'uncontrolled',
		initialValues: {
			system_id: '',
			access: '',
		},
		validate: {
			system_id: hasLength({ min: 1, max: 1 }),
			access: hasLength({ min: 1, max: 1 }),
		},
	});

	const handleSubmit = (values: typeof form.values) => {
		mutation.mutate({
			profile_id: id,
			system_id: Number(values.system_id),
			access: Number(values.access),
		});
	};

	return (
		<form onSubmit={form.onSubmit(handleSubmit)}>
			<Group gap={'xs'}>
				<Select
					placeholder='System'
					key={form.key('system_id')}
					{...form.getInputProps('system_id')}
					checkIconPosition='right'
					data={systemsList ?? []}
				/>
				<Select
					placeholder='Access'
					key={form.key('access')}
					{...form.getInputProps('access')}
					checkIconPosition='right'
					data={[
						{ value: '1', label: 'Administrator' },
						{ value: '2', label: 'Moderator' },
						{ value: '3', label: 'Standard' },
					]}
				/>
				<Button
					variant='transparent'
					type='submit'
				>
					<UserPlus size={'1rem'} />
				</Button>
			</Group>
		</form>
	);
};

export default RoleManagerSelect;
