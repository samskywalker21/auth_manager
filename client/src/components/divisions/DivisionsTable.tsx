import { Table, Badge, ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import useGetDivisions from '../../hooks/useGetDivisions';
import { Pencil } from 'lucide-react';
import DivisionForm from './DivisionForm';
import type { DivisionEdit } from '../../types';

const DivisionsTable = () => {
	const division = useGetDivisions();

	const openModal = (id: number) => {
		modals.open({
			id: 'edit-division-form',
			title: 'Edit Division',
			withCloseButton: false,
			children: <DivisionForm id={id} />,
		});
	};

	const divisionRows = division?.data?.data.map((row: DivisionEdit) => (
		<Table.Tr key={row.id + row.division_code}>
			<Table.Td>{row.id}</Table.Td>
			<Table.Td>{row.division_name}</Table.Td>
			<Table.Td visibleFrom='md'>{row.division_code}</Table.Td>
			<Table.Td visibleFrom='md'>
				<Badge
					color={row.status === 'A' ? 'green' : 'red'}
					variant='transparent'
				>
					{row.status === 'A' ? 'ACTIVE' : 'INACTIVE'}
				</Badge>
			</Table.Td>
			<Table.Td>
				<ActionIcon
					variant='transparent'
					onClick={() => openModal(row.id)}
				>
					<Pencil size={'1rem'} />
				</ActionIcon>
			</Table.Td>
		</Table.Tr>
	));

	return (
		<Table
			highlightOnHover
			withTableBorder
			withRowBorders
		>
			<Table.Thead>
				<Table.Tr>
					<Table.Th>ID</Table.Th>
					<Table.Th>Division</Table.Th>
					<Table.Th visibleFrom='md'>Code</Table.Th>
					<Table.Th visibleFrom='md'>Status</Table.Th>
					<Table.Th>Actions</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>{divisionRows}</Table.Tbody>
		</Table>
	);
};

export default DivisionsTable;
