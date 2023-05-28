import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnlyLayout } from '~/Layouts';

// no need login
const publicRoutes = [
    {
        path: "/",
        element: Home
    },
    {
        path: "/following",
        element: Following
    },
    {
        path: "/upload",
        element: Upload,
        layout: HeaderOnlyLayout
    }
]

// need login
const privateRoutes = [];

export { publicRoutes, privateRoutes };