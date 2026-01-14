import { Container, Flex, Title } from '@mantine/core';
import SystemsTable from '../components/systems/SystemsTable';

const SystemsPage = () => {
	return (
		<Container fluid>
			<Title order={3}>SYSTEMS</Title>
			<Flex
				direction={'column'}
				gap={'md'}
				justify={'flex-start'}
				align={'flex-start'}
				pt={'1rem'}
				wrap={{ base: 'wrap', md: 'nowrap' }}
			>
				<SystemsTable />
			</Flex>
		</Container>
	);
};

export default SystemsPage;
