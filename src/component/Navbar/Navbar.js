import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const handleOpenMenu = () => {
        let navbarSection2 = document.getElementById("navbarSection2");
        navbarSection2.classList.toggle("openSection");
        
    }

  return (
    <main className='navbar-main'>
        <section className="navbar-section1">
            <ul className="navbar-list-heading">
                <li className="navbarItem">
                  <h3>
                   NewsMonkey </h3> 
                </li>
                <li className="navbarItem navbar-icon" onClick={handleOpenMenu}>
                    Menu-Icon
                </li>
            </ul>
        </section>
        <section className="navbar-section2" id='navbarSection2' >
            <ul className="navbar-list2" >
                <li className='navbarItem navbarItem2'>
                  <Link className='navbar-link' to="/" >Home</Link>
                    </li>
                <li className='navbarItem navbarItem2'>
                   <Link className="navbar-link" to="/business" >Business</Link>
                    </li>
                <li className='navbarItem navbarItem2'>
                   <Link className="navbar-link" to="entertainment">Entertaiment</Link>
                    </li>
                <li className='navbarItem navbarItem2'>
                  <Link className="navbar-link" to="generalhealth" >Health</Link>
                    </li>
                <li className='navbarItem navbarItem2'>
                  <Link className="navbar-link" to="science" >Science</Link>
                    </li>
                <li className='navbarItem navbarItem2'>
                  <Link className="navbar-link" to="sports" >Sports</Link>
                    </li>
                <li className='navbarItem navbarItem2'>
                  <Link className="navbar-link" to="technology" >Technology</Link>
                    </li>
            </ul>
        </section>
    </main>
  )
}

export default Navbar