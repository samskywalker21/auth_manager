import { createFileRoute } from '@tanstack/react-router';
import DivisionsPage from '../../../pages/DivisionsPage';

export const Route = createFileRoute('/dashboard/admin/divisions')({
	component: DivisionsPage,
});
