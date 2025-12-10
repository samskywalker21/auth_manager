import { Container, Flex, Title } from '@mantine/core';
import SectionsTable from '../components/sections/SectionsTable';

const SectionsPage = () => {
	return (
		<Container fluid>
			<Title order={2}>Sections</Title>
			<Flex
				direction={'column'}
				gap={'md'}
				justify={'flex-start'}
				align={'flex-start'}
				pt={'1rem'}
				wrap={{ base: 'wrap', md: 'nowrap' }}
			>
				<SectionsTable />
			</Flex>
		</Container>
	);
};

export default SectionsPage;
