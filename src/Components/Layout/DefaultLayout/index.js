import Header from './Header';
import NavBar from './NavBar';
import NowPlayingBar from './NowPlayingBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <NavBar />
                <div className="content">{children}</div>
            </div>
            <NowPlayingBar />
        </div>
    );
}

export default DefaultLayout;
