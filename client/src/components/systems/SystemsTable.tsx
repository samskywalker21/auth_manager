import { useEffect, useState } from 'react';
import { Table, Badge, ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useDebouncedValue } from '@mantine/hooks';
import { Pencil } from 'lucide-react';
import SystemsTableControls from './SystemsTableControls';
import useGetSystemsPaginated from '../../hooks/useGetSystemsPaginated';
import type { SystemsData } from '../../types';
import SystemsEditForm from './SystemsEditForm';

const SystemsTable = () => {
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [debounced] = useDebouncedValue(search, 200);
	const systems = useGetSystemsPaginated(page, debounced);

	console.table(systems.data?.data.data);

	useEffect(() => {
		systems.refetch();
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
			withCloseButton: false,
			closeOnClickOutside: false,
			closeOnEscape: false,
			children: <SystemsEditForm id={id} />,
		});
	};

	const systemRows = systems.data?.data.data.map((row: SystemsData) => {
		return (
			<Table.Tr key={row.id}>
				<Table.Td>{row.id}</Table.Td>
				<Table.Td>{row.system_name}</Table.Td>
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
		);
	});

	return (
		<>
			<SystemsTableControls
				searchHandler={searchHandler}
				paginationHandler={paginationHandler}
				totalPages={systems.data?.data.meta.lastPage}
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
							<Table.Th>ID</Table.Th>
							<Table.Th>System</Table.Th>
							<Table.Th>Status</Table.Th>
							<Table.Th>Action</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>{systemRows}</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</>
	);
};

export default SystemsTable;
