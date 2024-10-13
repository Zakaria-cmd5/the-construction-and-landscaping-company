import { PropsWithChildren } from 'react'

const SectionsHeading = ({children}: PropsWithChildren) => {
  return (
    <div className="flex mt-5 items-center">
        <div className="bg-[#14B05D] w-[40px] h-[30px]" />
        <span className="ml-2 text-[48px] leading-[57.6px]">{children}</span>
      </div>
  )
}

export default SectionsHeading