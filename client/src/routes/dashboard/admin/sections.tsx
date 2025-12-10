import { createFileRoute } from '@tanstack/react-router';
import SectionsPage from '../../../pages/SectionsPage';

export const Route = createFileRoute('/dashboard/admin/sections')({
	component: SectionsPage,
});
