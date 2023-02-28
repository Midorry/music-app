import Home from '~/pages/Home';
import Album from '~/pages/Album';
import Search from '~/pages/Search';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/album', component: Album },
    { path: '/album', component: Search },
];

export const privateRoutes = [];
