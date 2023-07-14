import React from 'react';


const SideBar = () => {
  return (
    <div className='side-bar-div'>
      <h3 className='text1'>Board.</h3>
      <div className='low-div'>
        <ul className='ul-up'>
          <li className='li-up-lite' ><i style={{marginRight : '.5rem'}} class="ri-pie-chart-line"></i> <a>Dashborad</a></li>
          <li className='li-up' ><i  style={{marginRight : '.5rem'}} class="ri-bookmark-line"></i> <a>Transactions</a></li>
          <li className='li-up' ><i  style={{marginRight : '.5rem'}} class="ri-calendar-event-line"></i> <a>Schedule</a></li>
          <li className='li-up' ><i style={{marginRight : '.5rem'}} class="ri-user-3-line"></i> <a>Users</a></li>
          <li className='li-up' ><i style={{marginRight : '.5rem'}} class="ri-settings-5-line"></i> <a>Settings</a></li>
        </ul>
      </div>
      <div className='up-div'>
            <ul>
            <li className='li-down'><a>Help</a></li>
            <li className='li-down'><a>Contact Us</a></li>
            </ul>
          </div>
    </div>
  )
}

export default SideBar