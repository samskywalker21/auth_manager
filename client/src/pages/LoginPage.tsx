import { useState } from 'react';
import { Flex, Box, Stack, Image, Center, Text } from '@mantine/core';
import DohHeader from '../components/texts/DohHeader';
import LoginForm from '../components/login/LoginForm';
import backgroundImage from '../assets/login-background.webp';
import NotRegistered from '../components/login/NotRegistered';
import RegisterForm from '../components/login/RegisterForm';

const LoginPage = () => {
  const [isRegisterClicked, setRegisterClicked] = useState(false);

  const handleClick = () => {
    setRegisterClicked(!isRegisterClicked);
  };

  return (
    <>
      <Flex>
        <Box miw={{ base: '100%', sm: '50%', md: '30%' }} px={20} pt={'5vh'}>
          <Stack>
            <DohHeader titleSize={4} textSize="xs" />
            <Center my={'2vh'}>
              <Text size="1.5rem">AUTHENTICATION SERVICE</Text>
            </Center>
            {isRegisterClicked ? (
              <Box key="register">
                <RegisterForm invertSelection={handleClick} />
              </Box>
            ) : (
              <Box key="login">
                <LoginForm />
                <NotRegistered invertSelection={handleClick} />
              </Box>
            )}
          </Stack>
        </Box>
        <Box h={'100vh'} w={'100%'}>
          <Image src={backgroundImage} fit="cover" h={'100%'} />
        </Box>
      </Flex>
    </>
  );
};

export default LoginPage;
