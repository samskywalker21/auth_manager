import { Stack, TextInput, PasswordInput, Button, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import useGetSections from '../../hooks/useGetSections';
import flattenSection from '../../utils/flattenSection';
import useRegister from '../../hooks/useRegister';

const RegisterForm = ({ invertSelection }: { invertSelection: () => void }) => {
  const sectionsQuery = useGetSections('A');
  const list = sectionsQuery?.data;
  const options = flattenSection(list ?? []);

  const mutation = useRegister();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      section: 0,
      position: '',
      username: '',
      password: '',
    },
    validate: {
      firstName: (value) => (value.length < 1 ? 'Required' : null),
      middleName: (value) => (value.length < 1 ? 'Required' : null),
      lastName: (value) => (value.length < 1 ? 'Required' : null),
      section: (value) => (value < 1 ? 'Required' : null),
      position: (value) => (value.length < 1 ? 'Required' : null),
      username: (value) => (value.length < 1 ? 'Required' : null),
      password: (value) => (value.length < 1 ? 'Required' : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    mutation.mutate({
      first_name: values.firstName,
      last_name: values.lastName,
      middle_name: values.middleName,
      section_id: values.section,
      ...values,
    });
    form.reset();
  };

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="First Name"
            withAsterisk
            key={form.key('firstName')}
            {...form.getInputProps('firstName')}
          />
          <TextInput
            label="Middle Name"
            key={form.key('middleName')}
            {...form.getInputProps('middleName')}
          />
          <TextInput
            label="Last Name"
            withAsterisk
            key={form.key('lastName')}
            {...form.getInputProps('lastName')}
          />
          <Select
            label="Section"
            withAsterisk
            data={options}
            key={form.key('section')}
            {...form.getInputProps('section')}
          />
          <TextInput
            label="Position"
            withAsterisk
            key={form.key('position')}
            {...form.getInputProps('position')}
          />
          <TextInput
            label="Username"
            withAsterisk
            key={form.key('username')}
            {...form.getInputProps('username')}
          />
          <PasswordInput
            label="Password"
            withAsterisk
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <Button type="submit">REGISTER</Button>
        </Stack>
      </form>

      <Button onClick={invertSelection} variant="transparent" fullWidth={false}>
        BACK TO LOGIN
      </Button>
    </>
  );
};

export default RegisterForm;
