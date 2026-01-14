import { NavLink } from '@mantine/core';
import { House, LayoutPanelTop, ShieldUser, Users } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import useIsUserAdmin from '../../hooks/useIsUserAdmin';

const NavBarMenus = () => {
	const is_admin = useIsUserAdmin();

	return (
		<>
			<NavLink
				label='Home'
				leftSection={<House size={'1rem'} />}
				component={Link}
				activeOptions={{ exact: true }}
				to='/dashboard'
			/>
			{is_admin.data?.data === 1 ? (
				<NavLink
					label='Administrator'
					leftSection={<ShieldUser size={'1rem'} />}
				>
					<NavLink
						label='Profiles'
						leftSection={<Users size={'1rem'} />}
						component={Link}
						to='/dashboard/admin/profiles'
					/>
					<NavLink
						label='Sections'
						leftSection={<LayoutPanelTop size={'1rem'} />}
						component={Link}
						to='/dashboard/admin/sections'
					/>
					<NavLink
						label='Divisions'
						leftSection={<LayoutPanelTop size={'1rem'} />}
						component={Link}
						to='/dashboard/admin/divisions'
					/>
					<NavLink
						label='Systems'
						leftSection={<LayoutPanelTop size={'1rem'} />}
						component={Link}
						to='/dashboard/admin/systems'
					/>
					<NavLink
						label='Roles'
						leftSection={<LayoutPanelTop size={'1rem'} />}
						component={Link}
						to='/dashboard/admin/roles'
					/>
				</NavLink>
			) : null}
		</>
	);
};

export default NavBarMenus;
