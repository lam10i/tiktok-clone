import { Fragment } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { publicRoutes } from './routes';
import { DefaultLayout } from "./Layouts"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          publicRoutes.map((route, index, array) => {
            let Layout = route.layout ? route.layout : DefaultLayout;
            if (route.layout === null) {
              Layout = Fragment;
            }
            const Component = route.element;
            return <Route path={route.path} key={index} element={<Layout><Component /></Layout>}></Route>
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
