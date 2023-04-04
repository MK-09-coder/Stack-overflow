import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import decode from 'jwt-decode'
import logo from '../../assets/logo.png'
import search from '../../assets/magnifying-glass-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import {setCurrentUser} from '../../actions/currentUser'
const Navbar = () => {
    const dispatch = useDispatch()
    var User= useSelector((state) => (state.currentUserReducer))
    const navigate=useNavigate()
    //console.log(User)
    const handleLogout = () => {
      dispatch({type:'LOGOUT'});
      navigate('/')
      dispatch(setCurrentUser(null))
    }
    useEffect(() => {
      const token = User?.token
      if(token) {
        const decodedToken=decode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()){
          handleLogout()
        }
      }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])
    return (
    <nav className='main-nav'>
        <div className='navbar'>
        {/*This Link to tag converts anything to a button sort of thing be it text,image,etc */}
        {/*So what var User=null does is sets a user value if it is null then webpage displays Log in icon else it displays profile Avatar along with log out button */}
          <Link to='/' className='nav-item nav-logo'>
          <img src={logo} alt='logo'/>
          </Link>
          <Link to='/' className='nav-item nav-btn'>About</Link>
          <Link to='/' className='nav-item nav-btn'>Products</Link>
          <Link to='/' className='nav-item nav-btn'>For Teams</Link>  
        <form>
            <input type="text" placeholder="Search..."/> {/* This input tag causes box to be created with type as text and inside the box is the placeholder*/}
            <img src={search} alt="search"width="18" className='search-icon'/>
        </form>
        { User === null ?
        <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
        <>
          <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>{/*This avatar value is passed to avatar.jsx file and placed into variable childeren*/}
          <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
        </>
        }
         </div>
    </nav>
  )
}

export default Navbar