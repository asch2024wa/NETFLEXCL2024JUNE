
import './Header.css'
//  import Netflexlogo from '../../assets/Images/Netflexlogo.png'
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Header() {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
<div className='header_left'>
<ul> 
      {/* <li><img src={Netflexlogo}alt="Netflix logo" width="100"/></li>    */}
    <li>Netflix</li>
    <li>Home</li>
    <li>TvShows</li>
    <li>Movies</li>
    <li>Latest</li>
    <li>MyList</li>
    <li>Brouse by Languages</li>
</ul>
</div>
<div className='header_right'>
    <ul>
      
          <li><SearchIcon/></li> 
        <li><NotificationsNoneIcon/></li>
        <li><AccountBoxIcon/></li>
        <li><ArrowDropDownIcon/></li> 
         
    </ul>
    </div>
</div>


    </div>
  )
}

export default Header
