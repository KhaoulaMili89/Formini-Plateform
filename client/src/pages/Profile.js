import React ,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import NavBar from './Navbar'
import NavBarInstructor from './NavBarIstructor'
import Users from './Users'
import Login from './Login'
import { Slider } from '@material-ui/core'
import AboutUs from '../components/AboutUs'
import getUsers from '../actions/userAction'
import ProfileCArd from '../components/Profiles/Profile'
const Profile = ({history}) => {

  const role = useSelector(state => state.authReducer.user.role)
  const isAuth = useSelector(state => state.authReducer.isAuth)
 useEffect(() => {
   if(isAuth && role=="admin")
    history.push('/Users')
   
   else
   if(isAuth && role=="instructor")
    history.push('/Profile')

   else
   history.push('/Profile')

 }, [isAuth, history]) 
  
    return (
        <div>
            {role=="instructor"?<NavBarInstructor></NavBarInstructor>   :
           <NavBar></NavBar>}
           <br></br>             <br></br>
 <br></br>
<p></p>
 {/* <ProfileCArd></ProfileCArd> */}
         </div>
    )
}

export default Profile;
