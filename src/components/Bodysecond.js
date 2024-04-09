import React from 'react';
import './Bodysecond.css';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Bodysecond() {
  return (
    <div className='second-box'>
        <div className='secondbox-values'>
        <h4>Overview</h4><span>Monthly Earning</span> 
           
        </div>
        <span className='dropbox'> Quarterly<KeyboardArrowDownIcon/></span>
        <div className='secondbox-values'>
        <h4>Customers</h4><span>Customers that buy products</span>     
        </div>
        </div>  
  )
}

export default Bodysecond;