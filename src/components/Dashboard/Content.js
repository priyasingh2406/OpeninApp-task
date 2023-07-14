import React from 'react';
import Chart from './assests/Pie-Chart.png';
import GreenLine from './assests/green-line.png';
import BlueLine from './assests/blue-line.png';
import LineChart from './LineChart';

const Content = () => {
  return (
  <>
    <div className='content-dash'>
      <h2 className='text2'>Dashboard</h2>
      <div className='search-div'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <i class="ri-search-line"></i> 
        </div>          
     
      <i class="ri-notification-3-line icon1"></i>
      <img src='https://lh3.googleusercontent.com/nJpMQsubpiBJ0sNYU2vbfJnQILcsAw06QemEucL3u_3u4oMUKxG2N8OWmrMTv1YVghZEwq2QxasZzwT1jos4qdDaMPQF43liYg=w1600-rj' 
      className='img'
      alt=''
      />
      </div>
    </div>
    <div className='cubes'>
      <div style={{backgroundColor: '#DDEFE0'}} className='cubes-div'>
        <i  class="ri-exchange-dollar-line icon"></i>
        <h5 className='h5'>Total Revenues</h5>
        <h2 className='h2'>$2,129,430</h2>
      </div>

      <div style={{backgroundColor: '#F4ECDD'}}  className='cubes-div' >
        <i  class="ri-bookmark-line m  icon"></i>
        <h5 className='h5'>Total Transactions</h5>
        <h2 className='h2'>1,520</h2>
      </div>

      <div style={{backgroundColor: '#EFDADA'}} className='cubes-div'>
        <i  class="ri-thumb-up-line  icon"></i>
        <h5 className='h5'>Total Likes</h5>
        <h2 className='h2'>9,721</h2>
      </div>

      <div style={{backgroundColor: '#DEE0EF'}}  className='cubes-div'>
        <i class="ri-user-3-line icon"></i>
        <h5 className='h5'>Total Users</h5>
        <h2 className='h2'>892</h2>
      </div>
    </div>



    <div className='graph-section'>
      <LineChart />
    </div>
    <div className='main-div'>
    <div className='pie-div'>
      <div className='pie-chart-short-div'>
        <h4>Top Products</h4>
        <h5 >May-June 2021 <i class="ri-arrow-drop-down-line"></i></h5>
      </div>
      <div className='pie-chart-second-short-div'>
      <img  src={Chart} alt=''/>
      <div  className='pie-lite'> 
        <div className='div-circle'>
        <div className='circle' style={{backgroundColor: '#98D89E'}}></div>
        <h4>Basic Tees</h4>
        </div>
        <p>55%</p>

        <div className='div-circle'>
        <div className='circle' style={{backgroundColor: '#F6DC7D'}}></div>
        <h4>Custom Short Pants</h4>
        </div>
        <p>31%</p>
        
        <div className='div-circle'>
        <div className='circle' style={{backgroundColor: '#EE8484'}}></div>
        <h4>Super Hoodies</h4>
        </div>
        <p>14%</p>
      </div>
      </div>
    </div>


    <div className='pie-div-second'>
      <div className='pie-chart-short-div'>
        <h4>Today's schedule</h4>
        <h5 >See All <i class="ri-arrow-right-s-line"></i></h5>
      </div>
      <div className='schedule-div'>
        <div className='schedule-div-first'>
          <img src={GreenLine} alt='green-line'/>
          <div>
            <h4>Meeting with suppliers from Kuta Bali</h4>
            <p>14.00 - 15.00</p>
            <p>at Sunset Road, Kuta, Bali</p>
          </div>
        </div>

        <div className='schedule-div-first' >
          <img src={BlueLine} alt='blue-line'/>
          <div>
            <h4>Check operation at Giga Factory 1</h4>
            <p>18.00 - 20.00</p>
            <p>at Central Jakarta</p>
          </div>
        </div>

      </div>
      
    </div>
    </div>
  </>
  )
}

export default Content;