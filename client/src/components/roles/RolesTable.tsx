import { useEffect, useState } from 'react';
import { Table, Badge, ActionIcon } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useDebouncedValue } from '@mantine/hooks';
import { SquarePlus } from 'lucide-react';
import RolesTableControls from './RolesTableControls';
import useGetProfilesPaginated from '../../hooks/useGetProfilesPaginated';
import type { ProfileData } from '../../types';
import RoleManager from './RoleManager';

const RolesTable = () => {
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [debounced] = useDebouncedValue(search, 200);

	const users = useGetProfilesPaginated(page, debounced);

	useEffect(() => {
		users.refetch();
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
			children: <RoleManager id={id} />,
			size: 'lg',
		});
	};

	const profileData = users.data?.data.data.map((row: ProfileData) => {
		return (
			<Table.Tr key={row.id}>
				<Table.Td>{`${row.last_name}, ${row.first_name} ${row.middle_name}`}</Table.Td>
				<Table.Td>{row.section_name}</Table.Td>
				<Table.Td>{row.division_name}</Table.Td>
				<Table.Td>
					<ActionIcon
						variant='transparent'
						onClick={() => openModal(row.id)}
					>
						<SquarePlus size={'1rem'} />
					</ActionIcon>
				</Table.Td>
			</Table.Tr>
		);
	});

	return (
		<>
			<RolesTableControls
				searchHandler={searchHandler}
				paginationHandler={paginationHandler}
				totalPages={1}
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
							<Table.Th>Name</Table.Th>
							<Table.Th>Section</Table.Th>
							<Table.Th>Division</Table.Th>
							<Table.Th>Roles</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>{profileData}</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</>
	);
};

export default RolesTable;
