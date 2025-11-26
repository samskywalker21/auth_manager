import { createFileRoute, redirect } from '@tanstack/react-router';
import DashboardPage from '../pages/DashboardPage';

export const Route = createFileRoute('/dashboard')({
	beforeLoad: () => {
		if (!sessionStorage.getItem('access_token')) {
			return redirect({ to: '/' });
		}
	},
	component: DashboardPage,
});
