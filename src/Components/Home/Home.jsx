import React from 'react'
import './Home.css'
import video from '../../assets/Vedio.mp4'
import {GrLocation} from 'react-icons/gr'
export const Home = () => {
  return (
   <section className='home'>
    <div className='overlay'></div>
    <video src={video} muted autoPlay loop type="video/mp4"></video>
    <div className="homeContent container">
      <div className="textDiv">
        <span className="smallText">Travel Blogs</span>
        <h1 className="homeTitle"> Search your Favourite</h1>

      </div>

      <div className='cardDiv grid'>
        <div className='destinationInput'>
          <label htmlFor='City'>Search Destination</label>
<div className='input flex'>
  <input type="text" placeholder='Enter Name Here'/>
  <GrLocation className="icon"/>
</div>
        </div>
      </div>
    </div>
   </section>
  )
}
export default Home;