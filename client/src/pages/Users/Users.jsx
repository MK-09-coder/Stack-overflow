import React from 'react'
import {useLocation} from 'react-router-dom'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'
import './Users.css'
const Users = () => {
    const location=useLocation()
  return (
    <div className='home-container-1'>
        <LeftSidebar/> 
          <UsersList/>  
        </div>
  )
}

export default Users;