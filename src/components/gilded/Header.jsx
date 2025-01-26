import { useState, useEffect } from 'react';
import { HEADER_LIST } from '../../utils/helper';
import { Discord } from '../../utils/icons';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeHandler = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [open]);

    return (
        <div className="bg-black bg-opacity-80">
            <div className="max-w-[1360px] flex items-center justify-between pt-[19px] pb-[19.96px] mx-auto w-full container">
                <a className="max-w-[286px]" href="/">
                    <img src="/assets/images/webp/nav-logo-gilded.webp" alt="main-logo" />
                </a>
                <div
                    className={`flex gap-[29px] max-xl:gap-5 max-xl:fixed max-xl:top-0 max-xl:-right-full max-xl:h-full max-xl:w-full max-xl:justify-center max-xl:items-center transition-all duration-300 max-xl:flex-col max-xl:bg-black max-xl:z-10 ${open ? 'max-xl:!right-0' : ''
                        }`}
                >
                    <div className="flex gap-10 max-xl:gap-6 max-xl:flex-col items-center">
                        {HEADER_LIST.map((item, index) => (
                            <a
                                onClick={closeHandler}
                                href={item.link}
                                key={index}
                                className="text-white font-Josefin !whitespace-nowrap text-custom-7xl !leading-[100%] font-normal text-stroke transition-all duration-300">
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <button onClick={closeHandler}>
                        <a target="_blank" href="https://discord.com/"
                            class="font-normal text-2xl leading-6 py-3.5 px-[34px] text-white font-Josefin rounded-[79px] shadow-custom bg-gradient-to-t from-custom-blue to-custom-purple hover:from-custom-purple hover:to-custom-blue  transition ease-in-out duration-300 flex items-center gap-[10px] common-button">
                            <Discord/> Discord
                        </a>
                    </button>
                </div>
                <button
                    onClick={handleClick}
                    className="xl:hidden max-sm:w-[30px] max-sm:h-[24px] max-xl:w-[38px] max-xl:h-[28px] relative z-20 overflow-hidden flex flex-col items-center justify-between"
                >
                    <span
                        className={`transition-all duration-300 w-full h-0.5 bg-white rounded-lg ${open ? 'translate-x-10' : ''
                            }`}
                    ></span>
                    <span
                        className={`transition-all duration-300 w-full h-0.5 bg-white rounded-lg relative after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-lg ${open ? 'after:rotate-90 rotate-45' : ''
                            }`}
                    ></span>
                    <span
                        className={`transition-all duration-300 w-full h-0.5 bg-white rounded-lg ${open ? '-translate-x-10' : ''
                            }`}
                    ></span>
                </button>
            </div>
        </div>
    );
};

export default Header;
