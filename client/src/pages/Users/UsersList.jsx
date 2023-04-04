import React from 'react'
import {useSelector} from 'react-redux'
import User from './User'
import './Users.css'
const UsersList = () => {
    const users=useSelector((state) => (state.usersReducer))
    //console.log(users)
    return (
      <div style={{marginTop:'50px'}}>
        <h1 style={{fontWeight:"400",paddingLeft:"10px"}}>Users</h1>
    <div className='user-list-container'>
      {
        users.map((user) => (
          <User user = {user} key={user?._id} />
        ))
      }
      </div>
    </div>
  )
}

export default UsersList;