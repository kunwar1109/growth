import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_asessments/interdependence')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_asessments/interdependence"!</div>
}
