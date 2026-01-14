import { Container, Flex, Title } from '@mantine/core';
import RolesTable from '../components/roles/RolesTable';

const RolesPage = () => {
	return (
		<Container fluid>
			<Title order={3}>ROLES</Title>
			<Flex
				direction={'column'}
				gap={'md'}
				justify={'flex-start'}
				align={'flex-start'}
				pt={'1rem'}
				wrap={{ base: 'wrap', md: 'nowrap' }}
			>
				<RolesTable />
			</Flex>
		</Container>
	);
};

export default RolesPage;
