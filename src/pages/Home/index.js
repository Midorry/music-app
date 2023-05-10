import './Home.css';
import { getStorage, getDownloadURL, ref, listAll } from 'firebase/storage';
import { useEffect, useState } from 'react';

function Home() {
    const storage = getStorage();
    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, 'images/');

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    return (
        <div className="overflow-y-scroll h-[856px]">
            <div className="grid grid-cols-7 gap-6 min-h-[300px]">
                {imageUrls.map((url) => {
                    return (
                        <div className="music-tag w-[183px] h-[260px] p-4 rounded-lg bg-[#181818] hover:bg-[#282828] transition-all duration-300 ease-in-out cursor-pointer">
                            <div className="mb-4 relative">
                                <img
                                    alt=""
                                    className="h-[150px] w-[150px] bg-cover rounded-sm "
                                    src={url}
                                />
                                <div className="button-play h-12 w-12 absolute bottom-0 right-2 bg-green rounded-full flex items-center justify-center translate-y-0">
                                    <svg
                                        role="img"
                                        height="24"
                                        width="24"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-encore-id="icon"
                                    >
                                        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="min-h-[62px]">
                                <a href="/" className="text-base font-bold">
                                    Name Song
                                </a>
                                <div>
                                    <a
                                        href="/"
                                        className="text-sm font-normal text-[#a7a7a7]"
                                    >
                                        Name Artist
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
