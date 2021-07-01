import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import '../css/menu.css';
import StoreContext from '../components/Store/Context.js';
import { createBrowserHistory } from "history";
import ButtonSair from './styled';

const customHistory = createBrowserHistory();
const Menu = () => {
    const { setToken } = useContext(StoreContext);
return(
    <div>
     
     <input  type="checkbox" id="check"/>
             <label for="check">
                 <i class="fas fa-bars" id="btn"></i>
                 <i class="fas fa-times" id="cancel"></i>
             </label>

             <div className="sidebar" >
                 <header> <p> DASHBOARD API </p></header>
        
                 
                 <ButtonSair type="button" onClick={() => setToken(null)}>
                 <i class="fas fa-sign-out-alt" style={{ color:'#ffff', width:'25px', marginRight:'25px'}}></i> Sair
                </ButtonSair>
      
  
     
      


            
     </div>
    
          


    </div>
)


};

export default Menu;