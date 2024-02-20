import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Events from './Events';
import { Dashboard } from './Dashboard';

const SideMenu: React.FC = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li><a href="#" className="logo">
            <img src="/user-icon.jpg" alt="" />
            <span className="nav-item">TimeSync</span>
          </a></li>
          <li><Link to="/timesync/dashboard">
            <i className="fas fa-home"></i>
            <span className="nav-item">Dashboard</span>
          </Link></li>
          <li><Link to="/timesync/profile">
            <i className="fas fa-user"></i>
            <span className="nav-item">Profile</span>
          </Link></li>
          <li><Link to="/timesync/events">
            <i className="fas fa-wallet"></i>
            <span className="nav-item">Events</span>
          </Link></li>
          <li><a href="#">
            <i className="fas fa-chart-bar"></i>
            <span className="nav-item">Room Reservation</span>
          </a></li>
          <li><a href="#">
            <i className="fas fa-tasks"></i>
            <span className="nav-item">Attendence</span>
          </a></li>
          <li><a href="#">
            <i className="fas fa-cog"></i>
            <span className="nav-item">Settings</span>
          </a></li>
          <li><a href="#">
            <i className="fas fa-question-circle"></i>
            <span className="nav-item">Help</span>
          </a></li>
          <li><Link to="/" className="logout">
            <i className="fas fa-sign-out-alt"></i>
            <span className="nav-item">Log out</span>
          </Link></li>
        </ul>
      </nav>
     <Outlet/>
    </div>
  )
}

export default SideMenu;