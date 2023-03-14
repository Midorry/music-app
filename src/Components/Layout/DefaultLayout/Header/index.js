import Tippy from '@tippyjs/react';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional

import images from '~/assets/Images';

function Header() {
    const [icon, setIcon] = useState(false);
    const handleOnClick = () => {
        setIcon(!icon);
    };
    return (
        <header className="flex justify-between items-center w-full py-4 px-8 ">
            {/* <div
                className="h-[332px] w-full bg-[#535353] bg-gradient-to-b from-[#00000099] to-[#121212] 
                absolute right-0 top-0 left-0 -z-10"
            ></div> */}
            <div className="flex justify-between gap-4">
                <button className="h-[32px] w-[32px] text-white rounded-full bg-[rgba(0,0,0,.7)] inline-flex items-center justify-center">
                    <svg
                        fill="#fff"
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        class="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                    >
                        <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
                    </svg>
                </button>
                <button className="h-[32px] w-[32px] text-white rounded-full bg-[rgba(0,0,0,.7)] inline-flex items-center justify-center">
                    <svg
                        fill="white"
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        class="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                    >
                        <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
                    </svg>
                </button>
            </div>
            <div className="flex justify-between gap-4 relative">
                <a
                    href="/"
                    className="inline-flex items-center justify-center p-[15px] h-8 
                    font-bold text-sm border rounded-[500px] border-solid border-[#6b7280]
                    hover:scale-[1.04] hover:border-[#fff] cursor-default"
                    title="Upgrade to Premium"
                    aria-label="Upgrade to Premium"
                >
                    Upgrade
                </a>
                <Tippy content="Tam Tran" arrow={false}>
                    <button
                        className="flex gap-2 h-[32px] text-sm bg-[#000000b3] items-center 
                        rounded-[32px] p-0.5 font-bold hover:bg-[#282828]"
                        onClick={handleOnClick}
                    >
                        <img
                            src={images.avatar}
                            alt="Avatar"
                            className="h-[28px] w-[28px] rounded-full bg-blue object-cover"
                        ></img>
                        <p>Tam Tran</p>
                        {icon ? (
                            <svg
                                className="mr-[6px]"
                                fill="#fff"
                                role="img"
                                height="16"
                                width="16"
                                aria-hidden="true"
                                class="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k"
                                viewBox="0 0 16 16"
                                data-encore-id="icon"
                            >
                                <path d="m14 6-6 6-6-6h12z"></path>
                            </svg>
                        ) : (
                            <svg
                                className="mr-[6px]"
                                fill="#fff"
                                role="img"
                                height="16"
                                width="16"
                                aria-hidden="true"
                                class="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k"
                                viewBox="0 0 16 16"
                                data-encore-id="icon"
                            >
                                <path d="M14 10 8 4l-6 6h12z"></path>
                            </svg>
                        )}
                    </button>
                </Tippy>
                {icon ? (
                    <ul className="max-w-[350px] min-w-[150px] max-h-[calc(100vh_-_24px)] bg-[#282828] absolute right-0 top-10 p-1">
                        <li>
                            <button className="h-[40px] w-full p-[12px] font-normal flex justify-between items-center gap-2">
                                <span>Account</span>
                                <svg
                                    fill="#fff"
                                    role="img"
                                    height="16"
                                    width="16"
                                    aria-hidden="true"
                                    aria-label="External link"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                    class="Svg-sc-ytk21e-0 uPxdw"
                                >
                                    <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                                    <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="h-[40px] w-full p-[12px] font-normal flex justify-between items-center gap-2">
                                <span>Profile</span>
                                <svg
                                    fill="#fff"
                                    role="img"
                                    height="16"
                                    width="16"
                                    aria-hidden="true"
                                    aria-label="External link"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                    class="Svg-sc-ytk21e-0 uPxdw"
                                >
                                    <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                                    <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="h-[40px] w-full p-[12px] font-normal flex justify-between items-center gap-2">
                                <span>Upgrade to Premium</span>
                                <svg
                                    fill="#fff"
                                    role="img"
                                    height="16"
                                    width="16"
                                    aria-hidden="true"
                                    aria-label="External link"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                    class="Svg-sc-ytk21e-0 uPxdw"
                                >
                                    <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                                    <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="h-[40px] w-full p-[12px] font-normal flex justify-between items-center gap-2">
                                <span>Support</span>
                                <svg
                                    fill="#fff"
                                    role="img"
                                    height="16"
                                    width="16"
                                    aria-hidden="true"
                                    aria-label="External link"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                    class="Svg-sc-ytk21e-0 uPxdw"
                                >
                                    <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                                    <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="h-[40px] w-full p-[12px] font-normal flex justify-between items-center gap-2">
                                <span>Download</span>
                                <svg
                                    fill="#fff"
                                    role="img"
                                    height="16"
                                    width="16"
                                    aria-hidden="true"
                                    aria-label="External link"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                    class="Svg-sc-ytk21e-0 uPxdw"
                                >
                                    <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                                    <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="h-[40px] w-full p-[12px] font-normal flex justify-between items-center gap-2">
                                <span>Settings</span>
                                <svg
                                    fill="#fff"
                                    role="img"
                                    height="16"
                                    width="16"
                                    aria-hidden="true"
                                    aria-label="External link"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                    class="Svg-sc-ytk21e-0 uPxdw"
                                >
                                    <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                                    <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="h-[40px] w-full p-[12px] font-normal flex justify-between items-center gap-2 border-t-[1px] border-[#626262]">
                                <span>Log out</span>
                                <svg
                                    fill="#fff"
                                    role="img"
                                    height="16"
                                    width="16"
                                    aria-hidden="true"
                                    aria-label="External link"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                    class="Svg-sc-ytk21e-0 uPxdw"
                                >
                                    <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                                    <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                                </svg>
                            </button>
                        </li>
                    </ul>
                ) : (
                    <p className="absolute"></p>
                )}
            </div>
        </header>
    );
}

export default Header;
