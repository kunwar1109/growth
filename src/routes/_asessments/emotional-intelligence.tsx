import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_asessments/emotional-intelligence')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_asessments/emotional-intelligence"!</div>
}
