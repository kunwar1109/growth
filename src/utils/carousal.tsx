import { cloneElement, isValidElement, type FC } from "react"
import { Children, useState } from "react"

type Props = {
  heading?: string | null
  children: React.ReactNode,
}

interface SlideProps { active?: boolean, children: React.ReactNode }

const content = ["Unlock your full potential with our assessment designed to elevate your effectiveness and self-awareness.", "Gain deeper insights into your strengths, weaknesses, and behavioral patterns.", "Assess your coaching skills and identify areas for improvement."]

export const Carousal = ({ heading = null, children }: Props) => {

  const [active, setActive] = useState(0)

  const prevClick = () => {
    if (active === 0) {
      setActive(2)
    } else {
      setActive(prev => prev - 1)
    }
  }

  const nextClick = () => {
    if (active === 2) {
      setActive(0)
    } else {
      setActive(prev => prev + 1)
    }
  }

  return <>
    <div className="flex items-center gap-4 w-full">
      <div className="carousal-prev" onClick={prevClick}>
        <img src="/prev.svg" alt="prev" />
      </div>
      <div className="carousal-slides flex-[1_0_0] flex flex-col gap-2">
        <div className="flex overflow-auto">
          {
            Children.map(children, (child, index) => {

              // Checking isValidElement is the safe way and avoids a
              // typescript error too.
              if (isValidElement<SlideProps>(child)) {
                return cloneElement(child, { active: active === index })
              }
              return null
            })
          }
        </div>
        <div className="flex flex-col gap-2 items-start self-stretch">
          {heading && <div className="caraousal-heading">
            <h1 className="text-[16px] font-[700] tracking-[-0.8px] text-bcDarkBlue leading-normal">{heading}</h1>
          </div>}
          <div className="py-[1px] flex flex-col justify-center items-center self-stretch bg-[#D9D9D9]" />
          <div className="caraousal-contentText">
            <p className="text-[16px] font-[400] tracking-[-0.8px] text-bcDarkBlue leading-normal">{content[active]}</p>
          </div>
        </div>
        <div className="carousal-indicator flex py-6 justify-center items-center gap-2.5 self-stretch">
          {
            Children.map(children, (child, index) => <div className={`h-2.5 bg-bcDarkBlue rounded-full flex flex-col items-start justify-center ${active === index ? "w-[30px]" : "w-2.5"}`} />)
          }
        </div>
      </div>
      <div className="caraousal-next" onClick={nextClick}>
        <img src="/next.svg" alt="next" />
      </div>
    </div>
  </>
}

export const Slide: FC<SlideProps> = ({ active, children }) => {
  return <div className={`${active ? "" : "hidden"}`}>{children}</div>
}