import { Center, Stack, Paper, Title } from '@mantine/core';
import DohHeader from '../components/texts/DohHeader';
import LoginForm from '../components/login/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Center>
        <Stack mt={'md'} align="center" w={'40%'}>
          <DohHeader titleSize={2} textSize="xs" />
        </Stack>
      </Center>
    </>
  );
};

export default LoginPage;
