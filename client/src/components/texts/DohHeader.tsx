import { Stack, Title, Text } from '@mantine/core';
import type { TitleOrder } from '@mantine/core';

type HeaderProps = {
  titleSize: TitleOrder;
  textSize: string | undefined;
};

const DohHeader = ({ titleSize, textSize }: HeaderProps) => {
  return (
    <Stack gap={0} align="center">
      <Title order={titleSize}>DEPARTMENT OF HEALTH</Title>
      <Text size={textSize}>CENTER FOR HEALTH DEVELOPMENT - NORTHERN MINDANAO</Text>
    </Stack>
  );
};

export default DohHeader;
