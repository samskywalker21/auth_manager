import { Group, TextInput, Pagination, Flex } from '@mantine/core';
import { Search } from 'lucide-react';

const RolesTableControls = ({
	searchHandler,
	paginationHandler,
	totalPages,
}: {
	searchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	paginationHandler: (value: number) => void;
	totalPages: number;
}) => {
	return (
		<Group
			w={'100%'}
			wrap='nowrap'
		>
			<Flex
				w={'100%'}
				gap={5}
			>
				<TextInput
					placeholder='Search...'
					onChange={searchHandler}
					rightSection={<Search size={'1rem'} />}
					w={'50%'}
					miw={'250px'}
				/>
			</Flex>
			<Flex
				justify='flex-end'
				w={'100%'}
			>
				<Pagination
					total={totalPages}
					onChange={paginationHandler}
					withEdges
					siblings={5}
					boundaries={2}
				/>
			</Flex>
		</Group>
	);
};

export default RolesTableControls;
