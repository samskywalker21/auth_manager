import { Stack, TextInput, PasswordInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

const LoginForm = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (value) => (value.length < 2 ? 'Username must not be blank' : null),
      password: (value) => (value.length < 2 ? 'Password must not be blank' : null),
    },
  });

  const handleSubmit = async (values) => {
    form.validate();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Username"
          key={form.key('username')}
          {...form.getInputProps('username')}
        />
        <PasswordInput
          label="Password"
          key={form.key('password')}
          {...form.getInputProps('password')}
        />
        <Button type="submit" mt={'1vh'}>
          LOG IN
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
