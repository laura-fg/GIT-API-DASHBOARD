import React, {useState} from 'react';
import axios from 'axios';
import '../pages/Home/home.css';
const Repositories = () => {
 
const [usuario, setUsuario] = useState('');

function handleSearch(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
}
return(

<div className="repo-container">
    <div className="div-search">
    <h1> PESQUISAR: </h1>
   </div>

 <div className="div-pesquisa">
   <input type="text" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
   <button onClick={handleSearch}> OK</button>
 </div>
</div>

);

};
export default Repositories;