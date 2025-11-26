import { Flex, Image, Title, Text } from '@mantine/core';
import dohLogo from '../../assets/doh-logo.png';
import regionLogo from '../../assets/region-logo.png';

const HeaderWithLogo = () => {
	return (
		<Flex
			h={'100%'}
			gap={10}
			pl={'md'}
		>
			<Flex gap={2}>
				<Image
					src={dohLogo}
					h={'100%'}
					fit='contain'
				/>
				<Image
					src={regionLogo}
					h={'100%'}
					fit='contain'
				/>
			</Flex>
			<Flex
				direction='column'
				display={{ base: 'none', sm: 'block' }}
			>
				<Title order={4}>DEPARTMENT OF HEALTH</Title>
				<Text size='sm'>Center for Health Development - Northern Mindanao</Text>
			</Flex>
		</Flex>
	);
};

export default HeaderWithLogo;
