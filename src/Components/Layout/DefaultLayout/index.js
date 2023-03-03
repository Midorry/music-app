import Header from './Header';
import NavBar from './NavBar';
import NowPlayingBar from './NowPlayingBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="flex">
                <NavBar />
                <div className="flex flex-col basis-full bg-[#121212] z-0">
                    <Header className="" />
                    <div className="content px-8">{children}</div>
                </div>
            </div>
            <NowPlayingBar />
        </div>
    );
}

export default DefaultLayout;
