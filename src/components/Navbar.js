import React from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
function Navbar() {
  return (
    <div className='navigation'>
      
          <div className='textpart'>Hello sharukh,</div>
          <div className='search'>
            <SearchIcon/>
            <input type='text' placeholder='search'>
            </input>
            
            </div> 
            
    </div>
  )
}

export default Navbar;