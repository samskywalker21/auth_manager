import { Button, Group, Paper, Stack, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

import RoleManagerTable from './RoleManagerTable';
import RoleManagerSelect from './RoleManagerSelect';

const RoleManager = ({ id }: { id: number }) => {
	const closeModal = () => {
		modals.closeAll();
	};

	return (
		<Stack gap={'md'}>
			<Paper
				radius='md'
				p='sm'
				bg='green'
			>
				<Text fw={'bold'}>Role Manager</Text>
			</Paper>
			<RoleManagerSelect id={id} />
			<RoleManagerTable id={id} />
			<Group>
				<Button
					variant='subtle'
					color='red'
					onClick={closeModal}
				>
					CLOSE
				</Button>
			</Group>
		</Stack>
	);
};

export default RoleManager;
