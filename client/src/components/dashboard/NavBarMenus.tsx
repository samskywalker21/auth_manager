import { NavLink } from '@mantine/core';
import { House, ShieldUser, Users } from 'lucide-react';
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
			{is_admin ? (
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
				</NavLink>
			) : null}
		</>
	);
};

export default NavBarMenus;
