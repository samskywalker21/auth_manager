import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/admin/divisions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/admin/divisions"!</div>
}
