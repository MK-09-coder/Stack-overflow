import React from 'react'
import '../../App.css' 
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
const Home = () => {
  return (
    <div className= 'home-container-1'>
      <LeftSidebar/>
        <HomeMainbar/>
        <RightSidebar/>
        </div>
  )
}

export default Home