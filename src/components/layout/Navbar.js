import React from 'react';

//IMPORT ZNOWU NIE DZIAŁA
import logo from '../../img/talixo_logo_2x.png';

const Navbar = ({logo}) => {
    console.log(logo);
    return (
        <nav className='navbar container'>
            <img src={require('../../img/talixo_logo_2x.png')} alt="Talixo"/>
            <h3>LANGUAGE</h3>

        </nav>
    )
}

Navbar.defaultProps = {
    logo: {logo}
};

export default Navbar