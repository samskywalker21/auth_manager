import { useState } from 'react';
import { Table, Badge, ActionIcon } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import useGetSectionsPaginated from '../../hooks/useGetSectionsPaginated';
import SectionTableControls from './SectionTableControls';
import type { SectionData } from '../../types';
import { Pencil } from 'lucide-react';

const SectionsTable = () => {
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [debounce] = useDebouncedValue(search, 200);
	const sections = useGetSectionsPaginated(page, debounce);

	console.table(sections.data?.data.data);

	const sectionList = sections.data?.data.data.map((row: SectionData) => {
		return (
			<Table.Tr>
				<Table.Td>{row.id}</Table.Td>
				<Table.Td>{row.section_name}</Table.Td>
				<Table.Td>{row.section_code}</Table.Td>
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
					<ActionIcon variant='subtle'>
						<Pencil size={'1rem'} />
					</ActionIcon>
				</Table.Td>
			</Table.Tr>
		);
	});

	const paginationHandler = (value: number) => {
		setPage(value);
	};

	const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	return (
		<>
			<SectionTableControls
				paginationHandler={paginationHandler}
				searchHandler={searchHandler}
				totalPages={sections.data?.data.meta.lastPage ?? 1}
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
							<Table.Th>Section Name</Table.Th>
							<Table.Th>Section Code</Table.Th>
							<Table.Th visibleFrom='md'>Division</Table.Th>
							<Table.Th visibleFrom='md'>Division Code</Table.Th>
							<Table.Th>Status</Table.Th>
							<Table.Th>Action</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>{sectionList}</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
		</>
	);
};

export default SectionsTable;
