import { Box, Flex, Container, Title } from '@mantine/core';
import useGetProfile from '../hooks/useGetProfile';
import ProfileEditForm from '../components/general/ProfileEditForm';

const HomePage = () => {
	const query = useGetProfile();

	return (
		<Container fluid>
			<Title order={2}>Your Profile</Title>
			<Flex
				w={'50%'}
				direction='column'
				gap={'md'}
				pr={'10rem'}
				pt={'1rem'}
			>
				{query.isPending && 'Waiting'}
				{query.isSuccess && <ProfileEditForm profile={query.data?.data} />}
			</Flex>
		</Container>
	);
};

export default HomePage;
