import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_asessments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <div>Header</div>
    <Outlet />
  </div>
}
