export const Header = () => {
  return <header className="w-[1280px] mx-auto flex flex-col items-start gap-[24px]">
    <div className="w-full flex justify-between items-center">
      <img src="/bc-logo.svg" alt="bc-logo" />
      <img src="/close.svg" alt="close" className="cursor-pointer" />
    </div>
    <div className="h-[1px] w-full bg-bcDarkBlue " />
  </header>
}