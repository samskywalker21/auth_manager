import { Group, Button, TextInput, Pagination, Flex } from '@mantine/core';
import { modals } from '@mantine/modals';
import { Plus, Search } from 'lucide-react';
import DivisionInsertForm from './DivisionInsertForm';

const DivisionTableControls = ({
	searchHandler,
	paginationHandler,
	totalPages,
}: {
	searchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	paginationHandler: (value: number) => void;
	totalPages: number;
}) => {
	const addDivisionHandler = () => {
		modals.open({
			title: 'Add Division',
			children: <DivisionInsertForm />,
			withCloseButton: false,
			closeOnClickOutside: false,
		});
	};

	return (
		<Group
			w={'100%'}
			wrap='nowrap'
		>
			<Flex w={'100%'}>
				<Button
					variant='subtle'
					onClick={addDivisionHandler}
				>
					ADD{' '}
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
			<Flex
				justify='flex-end'
				w={'100%'}
			>
				<Pagination
					total={totalPages ?? 1}
					onChange={paginationHandler}
					withEdges
					siblings={5}
					boundaries={2}
				/>
			</Flex>
		</Group>
	);
};

export default DivisionTableControls;
