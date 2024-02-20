import React from 'react'
import { Link } from 'react-router-dom';
import Events from './Events';

const DashboardSlider: React.FC = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li><a href="#" className="logo">
            <img src="/user-icon.jpg" alt="" />
            <span className="nav-item">DashBoard</span>
          </a></li>
          <li><a href="#">
            <i className="fas fa-home"></i>
            <span className="nav-item">Home</span>
          </a></li>
          <li><a href="">
            <i className="fas fa-user"></i>
            <span className="nav-item">Profile</span>
          </a></li>
          <li><a href="#">
            <i className="fas fa-wallet"></i>
            <span className="nav-item">Events</span>
          </a></li>
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
      <Events/>
    </div>
  )
}

export default DashboardSlider;