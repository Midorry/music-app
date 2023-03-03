import Home from '~/pages/Home';
import Album from '~/pages/Album';
import Search from '~/pages/Search';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/album', component: Album },
    { path: '/search', component: Search },
];

export const privateRoutes = [];
