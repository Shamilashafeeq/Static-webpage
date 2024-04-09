import './App.css';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import Items from './components/Items';
import Navbar from './components/Navbar';
import Bodypart from './components/Bodypart';
import Bodysecond from './components/Bodysecond';
import img1 from './images/Statistics.PNG';

function App() {


  return (
    <div className="App">
     <div className='sidebar_container'>
      <div className='logo'>
        <span><TokenOutlinedIcon/></span><h3>Dashboard</h3></div>
      
        <div className='items'>
          <Items/>
        </div>
         </div>
        <div className='navbar_container'>
          <Navbar/>
          <div className='body_container'>
          <Bodypart/><div>
            <Bodysecond/><div className='image1'>
              <img src={img1} alt=""/></div> 
              
          </div>
        </div>
        </div> 
       
    </div>
    
  );
}

export default App;
