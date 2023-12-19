import React, { useEffect, useState } from 'react'
import './Barbers.css'
import barberList from '../../Service/barber'
import next_barber_btn from '../Assets/burbers-btn.png'

export const Barbers = () => {
    
    const [currentBarberIndex, setCurrentBarberIndex] = useState(0);
    const [animationState, setAnimationState] = useState('barbers-img-active');
    const [visibleBarbersCount, setVisibleBarbersCount] = useState(1);

    const updateVisibleBarbers = () => {
        const width = window.innerWidth;
        if (width >= 1200) {
            setVisibleBarbersCount(3);
        } else if (width >= 768) {
            setVisibleBarbersCount(2);
        } else {
            setVisibleBarbersCount(1);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateVisibleBarbers);
        updateVisibleBarbers();
        return () => window.removeEventListener('resize', updateVisibleBarbers);
    }, []);

    const nextBarber = () => {
        setAnimationState('barbers-img-exiting');
        setTimeout(() => {
            setCurrentBarberIndex((prevIndex) => (prevIndex + 1) % barberList.length);
            setAnimationState('barbers-img-entering');
        }, 200);
    };

    const visibleBarbers = barberList.slice(currentBarberIndex, currentBarberIndex + visibleBarbersCount);

    useEffect(() => {
        if (animationState === 'barbers-img-entering') {
            setTimeout(() => {
                setAnimationState('barbers-img-active');
            }, 200);
        }
    }, [animationState]);


    return (
        <div className='barbers'>
            <div className='barbers-wrap'>
                <h1 className='barbers-title'>BARBERS</h1>
                <div className='barbers-wrap-img'>
                    {visibleBarbers.map((barber, index) => (
                        <div>
                            <img key={barber.id} src={barber.img} alt={barber.name} className={`barbers-img ${animationState}`} />
                            <p className='barbers-name'>{barber.name}</p>
                        </div>
                        
                ))}
                </div>
            </div>
            <img src={next_barber_btn} alt="barber-btn" onClick={nextBarber} className='barber-btn'/>
        </div>
    );
}
