import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/admin/profiles')({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/dashboard/profiles"!</div>;
}
