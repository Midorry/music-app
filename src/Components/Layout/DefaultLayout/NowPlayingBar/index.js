import images from '~/assets/Images';

import { getStorage, getDownloadURL, ref, listAll } from 'firebase/storage';
import { useEffect, useState } from 'react';

function NowPlayingBar() {
    const $ = document.querySelector.bind(document);
    // const $$ = document.querySelectorAll.bind(document);

    // const playBtn = $('.play-btn');
    const audio = $('#audio');
    const storage = getStorage();
    const [imageUrls, setImageUrls] = useState([]);
    const listRef = ref(storage, 'audio/');
    // Lấy ra list music và link music
    useEffect(() => {
        listAll(listRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    // console.log(url);
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    // console.log(imageUrls[0]);
    const handleOnClick = () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    return (
        <div className="h-[90px] w-full z-10">
            <footer className="bg-[#181818] h-full">
                <div className="px-4 h-full flex items-center justify-between">
                    <div className="min-w-[180px] w-[30%] flex items-center">
                        <img
                            alt=""
                            src={images.coverThumb}
                            className="h-14 w-14 object-cover"
                        ></img>
                        <div className="flex flex-col mx-[14px]">
                            <span className="text-sm font-normal text-[#fff]">
                                <a href="/">Name Song</a>
                            </span>
                            <span className="text-[11px] text-[#b3b3b3]">
                                <a href="/">Name Artist</a>
                            </span>
                        </div>
                        <button className="text-[#b3b3b3] h-8 w-8 flex items-center justify-center">
                            <svg
                                fill="currentColor"
                                role="img"
                                height="16"
                                width="16"
                                aria-hidden="true"
                                viewBox="0 0 16 16"
                                data-encore-id="icon"
                            >
                                <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
                            </svg>
                        </button>
                        <button className="text-[#b3b3b3] h-8 w-8 flex items-center justify-center">
                            <svg
                                fill="currentColor"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="currentColor" fill-rule="evenodd">
                                    <path
                                        d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                                        fill-rule="nonzero"
                                    ></path>
                                    <path d="M10 8h4v3h-4z"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="max-w-[722px] w-[40%]">
                        <div className="flex justify-center gap-4 mb-2">
                            <div className="flex gap-2">
                                <button className="text-[#b3b3b3] h-8 w-8 flex justify-center items-center">
                                    <svg
                                        fill="currentColor"
                                        role="img"
                                        height="16"
                                        width="16"
                                        aria-hidden="true"
                                        viewBox="0 0 16 16"
                                        data-encore-id="icon"
                                    >
                                        <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
                                        <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
                                    </svg>
                                </button>
                                <button className="text-[#b3b3b3] h-8 w-8 flex justify-center items-center">
                                    <svg
                                        fill="currentColor"
                                        role="img"
                                        height="16"
                                        width="16"
                                        aria-hidden="true"
                                        viewBox="0 0 16 16"
                                        data-encore-id="icon"
                                    >
                                        <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
                                    </svg>
                                </button>
                            </div>
                            <button
                                className="play-btn text-[#000] h-8 w-8 bg-[#fff] rounded-full flex justify-center items-center"
                                onClick={handleOnClick}
                            >
                                <svg
                                    fill="currentColor"
                                    role="img"
                                    height="16"
                                    width="16"
                                    aria-hidden="true"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                >
                                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                                </svg>
                            </button>
                            <div className="flex gap-2">
                                <button className="text-[#b3b3b3] h-8 w-8 flex justify-center items-center">
                                    <svg
                                        fill="currentColor"
                                        role="img"
                                        height="16"
                                        width="16"
                                        aria-hidden="true"
                                        viewBox="0 0 16 16"
                                        data-encore-id="icon"
                                    >
                                        <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
                                    </svg>
                                </button>
                                <button className="text-[#b3b3b3] h-8 w-8 flex justify-center items-center">
                                    <svg
                                        fill="currentColor"
                                        role="img"
                                        height="16"
                                        width="16"
                                        aria-hidden="true"
                                        viewBox="0 0 16 16"
                                        data-encore-id="icon"
                                    >
                                        <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 w-full">
                            <div className="min-w-[40px] text-right text-[11px] text-[#A7A7A3]">
                                0:00
                            </div>
                            <div className="w-full relative">
                                <input
                                    className="w-full h-1 absolute bottom-[-2px]"
                                    id="progress"
                                    type="range"
                                    min="0"
                                    max="100"
                                ></input>
                                <audio id="audio" src={imageUrls[0]}></audio>
                            </div>
                            <div className="min-w-[40px] text-left text-[11px] text-[#A7A7A3]">
                                0:00
                            </div>
                        </div>
                    </div>
                    <div className="min-w-[180px] w-[30%] flex items-center justify-end">
                        <button className="text-[#b3b3b3] h-8 w-8 flex justify-center items-center">
                            <svg
                                fill="currentColor"
                                role="img"
                                height="16"
                                width="16"
                                aria-hidden="true"
                                viewBox="0 0 16 16"
                                data-encore-id="icon"
                            >
                                <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
                            </svg>
                        </button>
                        <button className="text-[#b3b3b3] h-8 w-8 flex justify-center items-center">
                            <svg
                                fill="currentColor"
                                role="img"
                                height="16"
                                width="16"
                                aria-hidden="true"
                                viewBox="0 0 16 16"
                                data-encore-id="icon"
                            >
                                <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
                            </svg>
                        </button>
                        <button className="text-[#b3b3b3] h-8 w-8 flex justify-center items-center">
                            <svg
                                fill="currentColor"
                                role="presentation"
                                height="16"
                                width="16"
                                aria-hidden="true"
                                viewBox="0 0 16 16"
                                data-encore-id="icon"
                            >
                                <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
                                <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                        </button>
                        <button className="text-[#b3b3b3] h-8 w-8 flex justify-center items-center">
                            <svg
                                fill="currentColor"
                                role="presentation"
                                height="16"
                                width="16"
                                aria-hidden="true"
                                aria-label="Volume low"
                                id="volume-icon"
                                viewBox="0 0 16 16"
                                data-encore-id="icon"
                            >
                                <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
                            </svg>
                        </button>
                        <label>
                            <input
                                className="h-1 relative top-[-3px]"
                                type="range"
                            ></input>
                        </label>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default NowPlayingBar;
