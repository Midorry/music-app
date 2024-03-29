import './NavBar.css';

function NavBar() {
    // const $ = document.querySelector.bind(document);
    // var rootStyle = document.documentElement.style;

    // // console.log(range.offsetWidth);
    // const handleOnChange = (e) => {
    //     const input = $('#input-range');
    //     console.log(e.target.value);
    //     console.log(input.value);
    //     document.getElementById('input-range').value = e.target.value;
    //     // rootStyle.setProperty('--nav-bar-width', e.target.value);
    // };
    return (
        <nav className="nav-bar flex h-full w-[318px] bg-[#000] z-10">
            <div className="pt-[24px] flex flex-col w-full">
                <a href="/" className="px-[24px] mb-[18px] block">
                    <svg
                        viewBox="0 0 1134 340"
                        className="h-[40px] w-full max-w-[131px]"
                    >
                        <title>Spotify</title>
                        <path
                            fill="#fff"
                            d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
                        ></path>
                    </svg>
                </a>
                <ul>
                    <li>
                        <a
                            href="/"
                            className="px-[24px] flex items-center text-[#b3b3b3] gap-4 h-10"
                        >
                            <svg
                                role="img"
                                height="24"
                                width="24"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-encore-id="icon"
                            >
                                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
                            </svg>
                            <span className="text-sm font-bold">Home</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="flex items-center h-10 px-[24px] text-[#b3b3b3] gap-4"
                        >
                            <svg
                                fill="#b3b3b3"
                                role="img"
                                height="24"
                                width="24"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-encore-id="icon"
                            >
                                <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                            </svg>
                            <span className="text-sm font-bold">Search</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="px-[24px] flex items-center h-10 text-[#b3b3b3] gap-4"
                        >
                            <svg
                                fill="#b3b3b3"
                                role="img"
                                height="24"
                                width="24"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-encore-id="icon"
                            >
                                <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
                            </svg>
                            <span className="text-sm font-bold">
                                Your Library
                            </span>
                        </a>
                    </li>
                </ul>
                <div className="mt-[24px] flex flex-col flex-1 text-sm font-bold">
                    <div className="svg-button opacity-70">
                        <button className="flex items-center py-[8px] px-[24px]">
                            <div className="bg-[#fff] w-[24px] h-[24px] flex items-center justify-center rounded-sm mr-[16px]">
                                <svg
                                    fill="#000"
                                    role="img"
                                    height="12"
                                    width="12"
                                    aria-hidden="true"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                >
                                    <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
                                </svg>
                            </div>
                            <span className="text-[#fff]">Create Playlist</span>
                        </button>
                    </div>
                    <div className="svg-link opacity-70">
                        <a
                            href="/"
                            className="flex items-center py-[8px] px-[24px]"
                        >
                            <div className="svg-bg flex items-center justify-center w-[24px] h-[24px] rounded-sm mr-[16px]">
                                <svg
                                    role="img"
                                    height="12"
                                    width="12"
                                    aria-hidden="true"
                                    viewBox="0 0 16 16"
                                    data-encore-id="icon"
                                >
                                    <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
                                </svg>
                            </div>
                            <span>Liked Songs</span>
                        </a>
                    </div>
                    <hr className="text-[#282828] h-[1px] mx-[24px] mt-2"></hr>
                    <div className="mt-2 mx-[24px] flex-1 bg-gray-light"></div>
                </div>
                <div className="h-[40px] flex mx-2 text-sm font-bold">
                    <a
                        href="/"
                        className="svg-install flex items-center gap-4 px-4 opacity-70"
                    >
                        <svg
                            role="img"
                            height="24"
                            width="24"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-encore-id="icon"
                        >
                            <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
                            <path d="M12 6.05a1 1 0 0 1 1 1v7.486l1.793-1.793a1 1 0 1 1 1.414 1.414L12 18.364l-4.207-4.207a1 1 0 1 1 1.414-1.414L11 14.536V7.05a1 1 0 0 1 1-1z"></path>
                        </svg>
                        <span>Install App</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
