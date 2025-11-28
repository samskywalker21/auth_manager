import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/admin/sections')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/admin/sections"!</div>
}
