import React, { useState } from 'react';
import './Navbar.css';
import menuButton from '../Assets/menu-button.png';
import closeButton from '../Assets/close.png';
import appointmentButton from '../Assets/appointment-button.png';
import { Link } from 'react-router-dom'; 

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            {/* Обробник подій onClick тепер правильно змінює стан isOpen на true */}
            <img src={menuButton} alt="Menu" className="menu-button" onClick={() => setIsOpen(true)} />
            <div className="barbershop-logo" aria-label="Barbershop"></div>
            <Link to="/appointment">
                <img src={appointmentButton} alt="Appointment" className="appointment-button" />
            </Link>
            
            {/* Додано клас "open", який управляється станом isOpen */}
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                {/* Обробник подій onClick закриває модальне вікно */}
                <img src={closeButton} alt="Close" className="close-button" onClick={() => setIsOpen(false)} />
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/appointment" className='nav-item'>Appointment</Link>
                <a href="#barbers" className='nav-item'>Barbers</a> 
                <a href="#price" className='nav-item'>Price</a>
            </div>
            <button className='button-contact'>Contact</button>
        </div>
    );
}


