import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Container } from '@mantine/core'
import { Header, Progress } from '../../components/assesments'

export const Route = createFileRoute('/_asessments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className='px-[80px] py-[64px]'>
    <Container size="640px">
      <Header />
      <Progress />
      <Outlet />
    </Container >
  </section>
}
