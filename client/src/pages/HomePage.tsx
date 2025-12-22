import { Flex, Container, Title, Box } from '@mantine/core';
import useGetProfile from '../hooks/useGetProfile';
import ProfileBasicInfo from '../components/home/ProfileBasicInfo';

const HomePage = () => {
	const query = useGetProfile();

	return (
		<Container fluid>
			<Title order={2}>Welcome, {query.data?.data.first_name ?? ''}</Title>
			<Flex
				direction={'column'}
				gap={'md'}
				justify={'flex-start'}
				align={'flex-start'}
				pt={'1rem'}
				wrap={{ base: 'wrap', md: 'nowrap' }}
			>
				{query.isPending && 'Waiting'}
				{query.isFetched && (
					<Box w={'100%'}>
						<ProfileBasicInfo data={query.data?.data} />
					</Box>
				)}
			</Flex>
		</Container>
	);
};

export default HomePage;
