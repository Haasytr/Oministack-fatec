import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom'

const Header = () => (
    <>  
        <header className='header'>            
                <img src="http://marivest.com/wp-content/uploads/2016/05/Marivest-Marijuana-and-Cannabis-Investments-Funding-Capital.png" className='brand' />
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contato</Link></li>
                    <li><Link to='/about'>Sobre</Link></li>
                    <li><Link to='/products'>Produto</Link></li>
                </ul>
        </header>
    </>
);

export default Header;
