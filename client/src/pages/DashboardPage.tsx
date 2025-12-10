import { AppShell, Box, Flex, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from '@tanstack/react-router';
import HeaderWithLogo from '../components/dashboard/HeaderWithLogo';
import HeaderUser from '../components/dashboard/HeaderUser';
import NavBarMenus from '../components/dashboard/NavBarMenus';
import usePostLogout from '../hooks/usePostLogout';
import { DoorOpen } from 'lucide-react';

const DashboardPage = () => {
	const [opened, { toggle }] = useDisclosure();

	const logout = usePostLogout();

	const handleLogOut = () => {
		logout.mutate();
	};

	return (
		<>
			<AppShell
				header={{ height: '75px', offset: true }}
				navbar={{
					width: '250px',
					breakpoint: 'sm',
					collapsed: { desktop: false, mobile: !opened },
				}}
			>
				<AppShell.Header>
					<Flex
						h={'100%'}
						py={'sm'}
					>
						<AppShell.Section>
							<HeaderWithLogo
								toggle={toggle}
								opened={opened}
							/>
						</AppShell.Section>
						<AppShell.Section grow>
							<HeaderUser />
						</AppShell.Section>
					</Flex>
				</AppShell.Header>
				<AppShell.Navbar>
					<AppShell.Section
						pt={'sm'}
						grow
					>
						<NavBarMenus />
					</AppShell.Section>
					<AppShell.Section pb={'5rem'}>
						<NavLink
							label='Logout'
							leftSection={<DoorOpen size={'1rem'} />}
							onClick={handleLogOut}
						/>
					</AppShell.Section>
				</AppShell.Navbar>
				<AppShell.Main>
					<Box p={'xl'}>
						<Outlet />
					</Box>
				</AppShell.Main>
			</AppShell>
		</>
	);
};

export default DashboardPage;
