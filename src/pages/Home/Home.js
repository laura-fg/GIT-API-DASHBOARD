import React, { useContext } from 'react';
import StoreContext from '../../components/Store/Context';
import Menu from '../menu.js';
import Repositories from '../../components/repositories.js';
import './home.css';

const PagesHome = () => {
  
  return (
    <div className="pages-home"  style={{background:'#efe3e3', height:'100vh'}}>
      
     <Menu></Menu>
<div style={{display: 'flex', justifyContent: 'flex-end'}}>
     <div className="content"> 
       <Repositories></Repositories>
     </div>
     </div>
    </div>
  );
};

export default PagesHome;