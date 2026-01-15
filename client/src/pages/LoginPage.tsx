import { useState } from 'react';
import { Box, Flex, Image } from '@mantine/core';
import login_image from '../assets/login-background.jpg';
import LoginPanel from '../components/login/LoginPanel';
import RegisterPanel from '../components/login/RegisterPanel';

const LoginPage = () => {
	const [register, setRegister] = useState(false);

	const changePanel = () => {
		setRegister((prev) => !prev);
	};

	return (
		<Flex
			gap={0}
			direction={'row'}
		>
			<Box
				miw={'500px'}
				w={{ base: '100%', sm: '30vw' }}
				h={'100vh'}
				pt={'8vh'}
				px={'2.5rem'}
			>
				{register ? (
					<RegisterPanel changePanel={changePanel} />
				) : (
					<LoginPanel changePanel={changePanel} />
				)}
			</Box>
			<Box
				w={'100%'}
				h={'100vh'}
				display={{ base: 'none', sm: 'block' }}
			>
				<Image
					src={login_image}
					h={'100%'}
					fit='cover'
				/>
			</Box>
		</Flex>
	);
};

export default LoginPage;
