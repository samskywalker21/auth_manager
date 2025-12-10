import { Button, Group, Pagination, TextInput, Flex } from '@mantine/core';
import { Plus, Search } from 'lucide-react';

const SectionTableControls = ({
	paginationHandler,
	searchHandler,
	totalPages,
}: {
	paginationHandler: (value: number) => void;
	searchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	totalPages: number;
}) => {
	return (
		<Group
			grow
			w={'100%'}
			wrap='nowrap'
		>
			<Flex>
				<Button variant='subtle'>
					ADD
					<Plus
						size={'1rem'}
						style={{ marginLeft: '0.5rem' }}
					/>
				</Button>
				<TextInput
					placeholder='Search...'
					rightSection={<Search size={'1rem'} />}
					onChange={searchHandler}
					w={'50%'}
					miw={'250px'}
				/>
			</Flex>
			<Flex justify='flex-end'>
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

export default SectionTableControls;
