import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_asessments/change')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_asessments/change"!</div>
}
