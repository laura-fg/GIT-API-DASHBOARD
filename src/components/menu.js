const Menu = () => {

    return(
        <div>
            <input  type="checkbox" id="check"></input>
             <label for="check">
                 <i class="fas fa-bars" id="btn"></i>
                 <i class="fas fa-bars" id="btn"></i>
             </label>

             <div className="sidebar" style={{background: "red"}}>
                 <header> <input type="text"> </input></header>
             <div>
                 <a href="#" className="active">
                     <i class="far fa-user"></i>
                     <i class="fas fa-bars" id="btn"></i>
                     <span> User</span>
                 </a>

                 <a href="#" className="active">
                     <i class="far fa-user"></i>
                     <span> Lista</span>
                 </a>

                 <a href="#" className="active">
                     <i class="far fa-user"></i>
                     <span> Estatisticas</span>
                 </a>
             </div>
     </div>
    
        </div>
    )
    
    
    };
    export default Menu;