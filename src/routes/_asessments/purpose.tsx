import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_asessments/purpose')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_asessments/purpose"!</div>
}
