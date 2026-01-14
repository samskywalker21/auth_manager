import { Group, Button, TextInput, Pagination, Flex } from '@mantine/core';
import { modals } from '@mantine/modals';
import { Plus, Search } from 'lucide-react';
import SystemsInsertForm from './SystemsInsertForm';

const SystemsTableControls = ({
	searchHandler,
	paginationHandler,
	totalPages,
}: {
	searchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	paginationHandler: (value: number) => void;
	totalPages: number;
}) => {
	const addSystemHandler = () => {
		modals.open({
			children: <SystemsInsertForm />,
			withCloseButton: false,
			closeOnClickOutside: false,
		});
	};

	return (
		<Group
			w={'100%'}
			wrap='nowrap'
		>
			<Flex
				w={'100%'}
				gap={5}
			>
				<Button
					variant='subtle'
					onClick={addSystemHandler}
				>
					ADD{' '}
					<Plus
						size={'1rem'}
						style={{ marginLeft: '0.5rem' }}
					/>
				</Button>
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

export default SystemsTableControls;
