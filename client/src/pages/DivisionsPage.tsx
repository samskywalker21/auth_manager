import { useState } from 'react';
import { Title, Flex, Box, Container } from '@mantine/core';
import DivisionsTable from '../components/divisions/DivisionsTable';
import DivisionForm from '../components/divisions/DivisionForm';
const DivisionsPage = () => {
	const [dataId, setDataId] = useState(0);

	const handleEditClick = (id: number) => {
		setDataId(id);
	};

	return (
		<Container fluid>
			<Title order={2}>Divisions</Title>
			<Flex
				direction={'row'}
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
