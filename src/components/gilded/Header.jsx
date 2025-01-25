import { useState } from 'react'
import { HEADER_LIST } from '../../utils/helper'
import { Discord } from '../../utils/icons'

const Header = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

    const closeHandler = () => {
        setOpen(false)
    }


    return (
        <div className="bg-black bg-opacity-80">
                <div className="max-w-[1358px] flex items-center justify-between py-5 max-lg:px-5 px-4 mx-auto w-full">
                    <a className='max-w-[286px]' href="/"> <img src="/assets/images/webp/nav-logo-gilded.webp" alt="main-logo" /> </a>
                    <div className={`flex gap-[29px] max-xl:gap-5 max-xl:fixed max-xl:top-0 max-xl:-right-full max-xl:h-full max-xl:w-full max-xl:justify-center max-xl:items-center transition-all duration-300 max-xl:flex-col max-xl:bg-black max-xl:z-10 ${open ? 'max-xl:!right-0' : ''}`}>
                        <div className='flex gap-10 max-xl:gap-6 max-xl:flex-col items-center' >
                            {HEADER_LIST.map((item, index) => (
                                <a onClick={closeHandler} href={item.link} key={index} className="text-white !whitespace-nowrap text-[22px] font-normal text-stroke transition-all duration-300">{item.title}</a>
                            ))}
                        </div>
                        <button onClick={closeHandler} className='text-white cursor-pointer hover:scale-110 transition-all duration-300 flex gap-2.5 items-center text-2xl leading-[24px] rounded-[79px] py-3.5 px-[34px] common-button'><Discord />Discord</button>
                    </div>
                    <button onClick={handleClick} className='xl:hidden size-6 relative z-20 overflow-hidden flex flex-col items-center justify-between'>
                        <span className={`transition-all duration-300 w-6 h-0.5 bg-white rounded-lg ${open ? ' translate-x-10' : ''}`}></span>
                        <span className={`transition-all duration-300 w-6 h-0.5 bg-white rounded-lg relative after:absolute after:top-0 after:left-0 after:w-6 after:h-0.5 after:bg-white after:rounded-lg ${open ? 'after:rotate-90 rotate-45' : ''}`}></span>
                        <span className={`transition-all duration-300 w-6 h-0.5 bg-white rounded-lg ${open ? ' -translate-x-10' : ''}`}></span>
                    </button>
                </div>
        </div>
    )
}

export default Header