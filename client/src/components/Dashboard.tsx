import React, { useState } from 'react'
import { eventData } from './constantData/eventData';

export const Dashboard: React.FC = () => {
  const [events, setEvents] = useState(eventData);
  return (
    <div className="main-body">
      <h2>Dashboard</h2>
      <div className='promo-container'>
        <div className="promo_card">
          <div className='content'>
            <h1>Welcome to TimeSync</h1>
            <span>Schedule Events , reserve rooms , and track attendence.</span>
          </div>
          <div className='girl-logo'></div>
        </div>
        <div className='notice-box'>
          <h3>Notice</h3>
          <div className='notice-content'>
            <p>This is a horizontally scrolling</p>
          </div>
        </div>
      </div>
      <div className="history_lists">
        <div className="list1">
          <div className="row">
            <h4>Upcoming Events </h4>
            <a href="#">See all</a>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Start Dates</th>
                <th>End  Dates</th>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
            {
                events.map((event)=>  (<tr>
                  <td>{event.serial_no}</td>
                  <td>{event.start_date}</td>
                  <td>{event.end_date}</td>
                  <td>{event.event_title}</td>
                  <td>{event.event_type
            }</td>
                </tr>))
              }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            </tbody>
          </table>
        </div>
        <div className="list2">
          <div className="row">
            <h4>Events History</h4>
            <a href="#">See all</a>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Start Dates</th>
                <th>End  Dates</th>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {
                events.map((event)=>  (<tr>
                  <td>{event.serial_no}</td>
                  <td>{event.start_date}</td>
                  <td>{event.end_date}</td>
                  <td>{event.event_title}</td>
                  <td>{event.event_type
            }</td>
                </tr>))
              }
            </tbody>
          </table>
        </div>
        <div className="list2">
          <div className="row">
            <h4>Room Reserved</h4>
            {/* <a href="#">Upload</a> */}
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Type</th>
                <th>Uplaoded</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>1</td>
                <td>CNIC</td>
                <td>PDF</td>
                <td>20</td>
              </tr> */}
              {/* <tr>
                <td>2</td>
                <td>Passport</td>
                <td>PDF</td>
                <td>12</td>
              </tr> */}
              {/* <tr>
                <td>3</td>
                <td>Licence</td>
                <td>PDF</td>
                <td>9</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Passport</td>
                <td>PDF</td>
                <td>12</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Licence</td>
                <td>PDF</td>
                <td>9</td>
              </tr> */}
              <tr>
                <td>2</td>
                <td>Passport</td>
                <td>PDF</td>
                <td>12</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Licence</td>
                <td>PDF</td>
                <td>9</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Passport</td>
                <td>PDF</td>
                <td>12</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Licence</td>
                <td>PDF</td>
                <td>9</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Passport</td>
                <td>PDF</td>
                <td>12</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Licence</td>
                <td>PDF</td>
                <td>9</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
