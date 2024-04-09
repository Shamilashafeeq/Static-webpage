import React from 'react';
import './Items.css';
import SpaceDashboardOutlined from '@mui/icons-material/SpaceDashboardOutlined';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
function Items() {
  return (
    <div className='item'>
        <ul className='list'>
          <li>
        <span><SpaceDashboardOutlined/></span><a href='index.html'>
           
          Dashboard          </a>
          </li>
          <li><span><ViewInArIcon/></span><a href='index.html'>
            Product
          </a>
          </li>
          <li><span><AccountBoxOutlinedIcon/></span><a href='index.html'>
            Customers
          </a>
          </li>
          <li><span><SavingsOutlinedIcon/></span><a href='index.html'>
            Income
          </a>
          </li>
          <li><span><PercentOutlinedIcon/></span><a href='index.html'>
             Promote
          </a>
          </li>
          <li><span><LiveHelpOutlinedIcon/></span><a href='index.html'>
          Help
          </a>
          </li>
        </ul>   
    </div>
  )
}

export default Items;