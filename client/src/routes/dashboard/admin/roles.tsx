import { createFileRoute } from '@tanstack/react-router';
import RolesPage from '../../../pages/RolesPage';

export const Route = createFileRoute('/dashboard/admin/roles')({
	component: RolesPage,
});
