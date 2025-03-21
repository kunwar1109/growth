import { Breadcrumbs } from "@mantine/core"

export const MainContainer = () => {
  return <main className="w-[960px] flex flex-col items-start gap-[4px] mx-auto">
    <div className="flex flex-col p-[32px] justify-between items-start gap-[8px]">
      <Breadcrumbs separator=">" className="flex items-center gap-[8px] text-[12px]">
        {["hello", "Hi"]}
      </Breadcrumbs>
      <h1 className="text-[32px] text-bcDarkBlue tracking-[-1.6px] text-center font-[500] leading-[32.5px]">Bettercoach Leadership Assessment</h1>
    </div>
    <div className="flex items-start gap-[32px] w-full self-stretch">
      <div className="p-[24px] flex-[1_0_0] border-[2px] border-bcPrimaryBlue rounded-3xl bg-white">
        Carousal
      </div>
      <div className="p-[24px] flex-[1_0_0]">Info</div>
    </div>
  </main>
}

