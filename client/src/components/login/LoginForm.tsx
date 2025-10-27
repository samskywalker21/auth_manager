import { Stack, TextInput, PasswordInput } from '@mantine/core';

const LoginForm = () => {
  return (
    <Stack>
      <TextInput label="Username" />
      <PasswordInput label="Password" />
    </Stack>
  );
};

export default LoginForm;
