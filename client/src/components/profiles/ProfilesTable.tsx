import { useState, useEffect } from 'react';
import { ActionIcon, Badge, Table } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import useGetProfilesPaginated from '../../hooks/useGetProfilesPaginated';
import type { ProfileData } from '../../types';
import { Pencil } from 'lucide-react';
import ProfilesTableControls from './ProfilesTableControls';

const ProfilesTable = () => {
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [debounced] = useDebouncedValue(search, 200);
	const query = useGetProfilesPaginated(page, debounced);

	useEffect(() => {
		query.refetch();
	}, [page, debounced]);

	const paginationHandler = (value: number) => {
		setPage(value);
	};

	const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const profiles = query.data?.data.data.map((row: ProfileData) => {
		return (
			<Table.Tr key={row.id}>
				<Table.Td>{`${row.last_name}, ${row.first_name} ${row.middle_name ? row.middle_name : ''}`}</Table.Td>
				<Table.Td>{row.position}</Table.Td>
				<Table.Td>{row.section_name}</Table.Td>
				<Table.Td>{row.division_name}</Table.Td>
				<Table.Td>
					{row.is_admin == true ? (
						<Badge variant='subtle'>ADMIN</Badge>
					) : (
						<Badge
							variant='subtle'
							color='blue'
						>
							USER
						</Badge>
					)}
				</Table.Td>
				<Table.Td>
					{row.status === 'A' ? (
						<Badge variant='subtle'>ACTIVE</Badge>
					) : (
						<Badge
							variant='subtle'
							color='red'
						>
							INACTIVE
						</Badge>
					)}
				</Table.Td>
				<Table.Td>
					<ActionIcon variant='subtle'>
						<Pencil size={'1rem'} />
					</ActionIcon>
				</Table.Td>
			</Table.Tr>
		);
	});

	return (
		<>
			<ProfilesTableControls
				searchHandler={searchHandler}
				paginationHandler={paginationHandler}
				totalPages={query?.data?.data.meta.lastPage}
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
							<Table.Th>Position</Table.Th>
							<Table.Th>Section</Table.Th>
							<Table.Th>Division</Table.Th>
							<Table.Th>Access</Table.Th>
							<Table.Th>Status</Table.Th>
							<Table.Th>Actions</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>{profiles}</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</>
	);
};

export default ProfilesTable;
