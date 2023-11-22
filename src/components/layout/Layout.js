import { Outlet } from 'react-router-dom';
import Header from '../header/Header.js';

const Layout = () => {
  return(
    <>
    <Header />
    <Outlet />
    </>
  );
}

export default Layout;