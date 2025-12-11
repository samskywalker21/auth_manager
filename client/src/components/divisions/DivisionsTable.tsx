import { useEffect, useState } from 'react';
import { Table, Badge, ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useDebouncedValue } from '@mantine/hooks';
import { Pencil } from 'lucide-react';
import DivisionEditForm from './DivisionEditForm';
import type { DivisionData } from '../../types';
import useGetDivisionsPagination from '../../hooks/useGetDivisionsPagination';
import DivisionTableControls from './DivisionTableControls';

const DivisionsTable = () => {
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [debounced] = useDebouncedValue(search, 200);
	const division = useGetDivisionsPagination(page, debounced);

	useEffect(() => {
		division.refetch();
	}, [page, debounced]);

	const paginationHandler = (value: number) => {
		setPage(value);
	};

	const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const openModal = (id: number) => {
		modals.open({
			id: 'edit-division-form',
			title: 'Edit Division',
			withCloseButton: false,
			closeOnClickOutside: false,
			closeOnEscape: false,
			children: <DivisionEditForm id={id} />,
		});
	};

	const divisionRows = division?.data?.data.data.map((row: DivisionData) => (
		<Table.Tr key={row.id + row.division_code}>
			<Table.Td>{row.division_name}</Table.Td>
			<Table.Td>{row.division_code}</Table.Td>
			<Table.Td>
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
		<>
			<DivisionTableControls
				searchHandler={searchHandler}
				paginationHandler={paginationHandler}
				totalPages={division?.data?.data.meta.lastPage}
			/>
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
							<Table.Th>Division</Table.Th>
							<Table.Th>Code</Table.Th>
							<Table.Th>Status</Table.Th>
							<Table.Th>Actions</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>{divisionRows}</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</>
	);
};

export default DivisionsTable;
