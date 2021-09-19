import React from 'react';
import perfil from './../images/perfil.jpeg'

const NavBar = () => {

    return (
        <div>
            <img src={perfil} alt="perfil" />
            <ul>
                <li>Contacto</li>
                <li>About</li>
                <li>Habilidades</li>
                <li>Proyectos</li>
                <li>Plantillas</li>


            </ul>
            <button>Descargar CV</button>



        </div>
    );

}

export default NavBar;