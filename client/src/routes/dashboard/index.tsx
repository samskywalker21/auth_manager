import { createFileRoute } from '@tanstack/react-router';
import HomePanel from '../../components/dashboard/HomePanel';

export const Route = createFileRoute('/dashboard/')({
	component: HomePanel,
});
