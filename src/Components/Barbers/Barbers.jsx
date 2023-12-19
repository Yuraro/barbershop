import React, { useEffect, useState } from 'react'
import './Barbers.css'
import barber from '../../Service/barber'
import next_barber_btn from '../Assets/burbers-btn.png'

export const Barbers = () => {
    
    const [currentBarberIndex, setCurrentBarberIndex] = useState(0);
    const [animationState, setAnimationState] = useState('barbers-img-active');

    const nextBarber = () => {
        setAnimationState('barbers-img-exiting');
        setTimeout(() => {
            setCurrentBarberIndex((prevIndex) => (prevIndex + 1) % barber.length);
            setAnimationState('barbers-img-entering');
        }, 200);
    };

    useEffect(() => {
        if (animationState === 'barbers-img-entering') {
            setTimeout(() => {
                setAnimationState('barbers-img-active');
            }, 200);
        }
    }, [animationState]);

    const currentBarber = barber[currentBarberIndex];

    return (
        <div className='barbers'>
            <div className='barbers-wrap'>
                <h1 className='barbers-title'>BARBERS</h1>
                <img src={currentBarber.img} alt={currentBarber.name} id={currentBarber.id} className={`barbers-img ${animationState}`}/>
            </div>
            <img src={next_barber_btn} alt="barber-btn" onClick={nextBarber} className='barber-btn'/>
        </div>
    );
}
