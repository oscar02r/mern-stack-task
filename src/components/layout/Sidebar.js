import React from 'react';
import NuevoProyecto from '../projects/NuevoProyecto';
import ListadoProyecto from '../projects/ListadoProyecto';

const Sidebar = () => {
    return ( 
        <aside>
          <h1>MERN <span>Tasks</span></h1>
          <NuevoProyecto/>
          <div className="proyectos">
            <h2>Tus proyectos</h2>
            <ListadoProyecto />
          </div>
        </aside> 
        );
}
 
export default Sidebar;