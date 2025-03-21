import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/introduction/header'
import { MainContainer } from '../components/introduction/main'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="App py-[64px] px-[80px]">
      <Header />
      <MainContainer />
    </div>
  )
}



