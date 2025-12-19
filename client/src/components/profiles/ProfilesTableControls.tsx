import { Group, Button, TextInput, Pagination, Flex } from '@mantine/core';
import { modals } from '@mantine/modals';
import { Plus, Search } from 'lucide-react';
import ProfileInsertForm from './ProfileInsertForm';

const ProfilesTableControls = ({
	searchHandler,
	paginationHandler,
	totalPages,
}: {
	searchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	paginationHandler: (value: number) => void;
	totalPages: number;
}) => {
	const addProfileHandler = () => {
		modals.open({
			size: 'lg',
			title: 'Add Profile',
			children: <ProfileInsertForm />,
			withCloseButton: false,
			closeOnClickOutside: false,
			closeOnEscape: false,
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
					onClick={addProfileHandler}
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
					w={'50%'}
					miw={'250px'}
					onChange={searchHandler}
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

export default ProfilesTableControls;
