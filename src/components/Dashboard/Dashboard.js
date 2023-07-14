import React from 'react';
import SideBar from './SideBar';
import './dash.css';
import Content from './Content';

const Dashboard = ({ details }) => {
  return (
    <div className='dash'>
      <div className='side-bar'>
        { console.log(details)}
        <SideBar />
      </div>
      <div className='content-side'>
        <Content />
      </div>
    </div>
  )
}

export default Dashboard