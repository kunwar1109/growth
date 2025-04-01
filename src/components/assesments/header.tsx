import { Divider } from "@mantine/core"

export const Header = () => {
  return <header className='w-full flex flex-col items-start gap-6'>
    <div className='w-[195px] h-[40px] flex justify-center items-center'>
      <img src="/bc-logo.svg" alt="bc-logo" />
    </div>
    <Divider bg="bcDarkBlue.0" h="1px" pt="1px" pb="1px" className='flex flex-col items-center justify-center self-stretch' />
  </header>
}