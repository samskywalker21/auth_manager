import { Title, Flex, Container } from '@mantine/core';
import DivisionsTable from '../components/divisions/DivisionsTable';

const DivisionsPage = () => {
	return (
		<Container fluid>
			<Title order={3}>DIVISIONS</Title>
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
