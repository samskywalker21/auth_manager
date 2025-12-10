import { Title, Flex, Container, Button, Group } from '@mantine/core';
import { modals } from '@mantine/modals';
import { Plus, Search } from 'lucide-react';
import DivisionsTable from '../components/divisions/DivisionsTable';
import DivisionInsertForm from '../components/divisions/DivisionInsertForm';

const DivisionsPage = () => {
	const handleAddButton = () => {
		const addDivisionModal = modals.open({
			withCloseButton: false,
			closeOnClickOutside: false,
			closeOnEscape: false,
			title: 'Add Division',
			children: <DivisionInsertForm />,
		});
	};

	return (
		<Container fluid>
			<Title order={2}>Divisions</Title>
			<Flex
				direction={'column'}
				gap={'md'}
				justify={'flex-start'}
				align={'flex-start'}
				pt={'1rem'}
				wrap={{ base: 'wrap', md: 'nowrap' }}
			>
				<DivisionsTable />
			</Flex>
		</Container>
	);
};

export default DivisionsPage;
