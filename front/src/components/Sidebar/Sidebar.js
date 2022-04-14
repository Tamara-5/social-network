import React, { useEffect, useState } from 'react';
import DiscoverIcon from '../svgs/DiscoverIcon';
import ProfileIcon from '../svgs/ProfileIcon';
import TimeLineIcon from '../svgs/TimeLineIcon';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  const location = useLocation();
  const [activePageIndex, setActivePageIndex] = useState(0);

  useEffect(() => {
    switch(location.pathname) {
      case '/':
        setActivePageIndex(0);
        break;
      default:
        setActivePageIndex(0);
    }
  }, [location.pathname])

  return (
    <div className="sidebar">
      <div className="submenu">
        <Link to="/" className={activePageIndex === 0 ? 'active' : ''}>
          <DiscoverIcon />
          <h3>Discovery</h3>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar;