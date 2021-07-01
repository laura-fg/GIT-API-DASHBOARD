import React, {useState} from 'react';
import axios from 'axios';
import '../pages/Home/home.css';
const Repositories = () => {
 
const [usuario, setUsuario] = useState('');

function handleSearch(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
}
return(
<div>
<div className="repo-container">
    <div className="div-search">
    <h1> Pesquisar: </h1>
   <h2>{usuario}</h2>
   </div>

   <div>
   <input type="text" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
   <button onClick={handleSearch}> Pesquisar</button>
   </div>
</div>
</div>
);

};
export default Repositories;