import { ActionIcon, Group, Table } from '@mantine/core';
import type { RoleData } from '../../types';
import useGetRolesByProfile from '../../hooks/useGetRolesByProfile';
import { Trash, Pencil, Pen } from 'lucide-react';

const RoleManagerTable = ({ id }: { id: number }) => {
	const query = useGetRolesByProfile(id);
	const roles = query.data?.data ?? [];

	console.log(query.data?.data ?? []);

	const roleList = roles.map((row: RoleData) => {
		return (
			<Table.Tr key={row.id}>
				<Table.Td>{row.system_name}</Table.Td>
				<Table.Td>
					{row.access === '1'
						? 'Administrator'
						: row.access === '2'
							? 'Moderator'
							: 'Standard'}
				</Table.Td>
				<Table.Td>
					<ActionIcon.Group>
						<ActionIcon variant='subtle'>
							<Pencil size={'1rem'} />
						</ActionIcon>
						<ActionIcon
							variant='subtle'
							c={'red'}
						>
							<Trash size={'1rem'} />
						</ActionIcon>
					</ActionIcon.Group>
				</Table.Td>
			</Table.Tr>
		);
	});

	return (
		<Table.ScrollContainer
			minWidth={500}
			w={'100%'}
		>
			<Table
				highlightOnHover
				withTableBorder
				withRowBorders
			>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>System</Table.Th>
						<Table.Th>Access</Table.Th>
						<Table.Th>Action</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>{roleList}</Table.Tbody>
			</Table>
		</Table.ScrollContainer>
	);
};

export default RoleManagerTable;
