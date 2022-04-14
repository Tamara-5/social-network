import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const SidebarLayout = () => (
  <div className="main-content">
    {/* <Sidebar /> */}
    <Outlet />
  </div>
);

export default SidebarLayout