import { Container, Flex, Title } from '@mantine/core';

import ProfilesTable from '../components/profiles/ProfilesTable';

const ProfilesPage = () => {
	return (
		<Container fluid>
			<Title order={3}>PROFILES</Title>
			<Flex
				direction={'column'}
				gap={'md'}
				justify={'flex-start'}
				align={'flex-start'}
				pt={'1rem'}
				wrap={{ base: 'wrap', md: 'nowrap' }}
			>
				<ProfilesTable />
			</Flex>
		</Container>
	);
};

export default ProfilesPage;
