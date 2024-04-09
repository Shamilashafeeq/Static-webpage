import React from 'react';
import './Bodypart.css';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
function Bodypart()  {
  return (
    <div className='bodyvalues'>
      <div className='val-box'>
        <span><CurrencyExchangeOutlinedIcon/></span>
        <div>
          Earning
          <h4>$198k</h4>
          <h6>37.8% this month </h6>
        </div>
        
      </div>
      <div className='val-box'>
        <span><FeaturedPlayListOutlinedIcon/></span>
        <div>
          Orders
          <h4>$2.4k</h4>
          <h6>2% this month</h6>
        </div>
        
      </div>
      <div className='val-box'>
        <span><AccountBalanceWalletOutlinedIcon/></span>
        <div>
          Balance
          <h4>$2.4k</h4>
          <h6>2% this month</h6>
        </div>
        
      </div>
      <div className='val-box'>
        <span><BusinessCenterOutlinedIcon/></span>
        <div>
          Total Sales
          <h4>$89k</h4>
          <h6>11% this month</h6>
        </div>
        
      </div>
    </div>
  );
}

export default Bodypart;