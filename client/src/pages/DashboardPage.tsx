import { AppShell, Box, Flex, NavLink } from '@mantine/core';
import { Outlet } from '@tanstack/react-router';
import HeaderWithLogo from '../components/dashboard/HeaderWithLogo';
import { House, ShieldUser, Users } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import HeaderUser from '../components/dashboard/HeaderUser';
import NavBarMenus from '../components/dashboard/NavBarMenus';

const DashboardPage = () => {
	return (
		<>
			<AppShell
				header={{ height: '75px', offset: true }}
				navbar={{ width: '250px', breakpoint: 'sm' }}
			>
				<AppShell.Header>
					<Flex
						h={'100%'}
						py={'sm'}
					>
						<AppShell.Section>
							<HeaderWithLogo />
						</AppShell.Section>
						<AppShell.Section grow>
							<HeaderUser />
						</AppShell.Section>
					</Flex>
				</AppShell.Header>
				<AppShell.Navbar>
					<AppShell.Section pt={'sm'}>
						<NavBarMenus />
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
