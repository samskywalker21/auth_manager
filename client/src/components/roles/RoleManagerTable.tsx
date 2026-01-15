import { ActionIcon, Table } from '@mantine/core';
import type { RoleData } from '../../types';
import useGetRolesByProfile from '../../hooks/useGetRolesByProfile';
import { Trash, Pencil } from 'lucide-react';
import useDeleteRole from '../../hooks/useDeleteRole';

const RoleManagerTable = ({ id }: { id: number }) => {
	const query = useGetRolesByProfile(id);
	const roles = query.data?.data ?? [];
	const mutation = useDeleteRole();

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
							onClick={() => handleDelete(row.id)}
						>
							<Trash size={'1rem'} />
						</ActionIcon>
					</ActionIcon.Group>
				</Table.Td>
			</Table.Tr>
		);
	});

	const handleDelete = (id: number) => {
		mutation.mutate(id);
	};

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
