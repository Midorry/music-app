import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './Components/Layout/DefaultLayout';
import images from './assets/Images';

import { getDatabase, child, get, set } from 'firebase/database';
import { getStorage, getDownloadURL, ref, listAll } from 'firebase/storage';
import { database } from './firebase';
import { getTokenFromResponse } from './Components/spotify';
import Login from './Components/Login';

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromResponse();
        window.location.hash = '';
        const _token = hash.access_token;
        if (_token) {
            setToken(_token);
        }
    }, []);

    return (
        <Router>
            <div className="App text-[#fff]">
                {token ? (
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Layout =
                                route.layout === null
                                    ? Fragment
                                    : DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                ) : (
                    <Login />
                )}
            </div>
        </Router>
    );
}

export default App;
