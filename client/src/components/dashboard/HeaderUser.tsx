import { ActionIcon, Flex, useMantineColorScheme } from '@mantine/core';
import { Moon, Sun } from 'lucide-react';

const HeaderUser = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<Flex
			w={'100%'}
			justify={'flex-end'}
			pr={'md'}
			align={'center'}
			pt={5}
		>
			<ActionIcon
				variant='transparent'
				onClick={toggleColorScheme}
				color={colorScheme === 'light' ? 'yellow' : 'teal'}
				size={'lg'}
			>
				{colorScheme === 'light' ? <Sun /> : <Moon />}
			</ActionIcon>
		</Flex>
	);
};

export default HeaderUser;
