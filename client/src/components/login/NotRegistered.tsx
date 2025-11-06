import { Center, Group, Text, Button } from '@mantine/core';

const NotRegistered = ({ invertSelection }: { invertSelection: () => void }) => {
  return (
    <Center mt={'4vh'}>
      <Group gap={'0.5rem'}>
        <Text>No account yet?</Text>
        <Text
          renderRoot={(props) => (
            <Button {...props} variant="transparent" p={0} onClick={invertSelection} />
          )}
        >
          REGISTER
        </Text>
      </Group>
    </Center>
  );
};

export default NotRegistered;
