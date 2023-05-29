import Flicking from '@egjs/react-flicking';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// brang img
import brand1 from '../../assets/brands/brnd-1.jpg'
import brand2 from '../../assets/brands/brnd-2.jpg'
import brand3 from '../../assets/brands/brnd-3.jpg'
import brand4 from '../../assets/brands/brnd-4.jpg'
import brand5 from '../../assets/brands/brnd-5.jpg'
import brand6 from '../../assets/brands/brnd-6.jpg'


const Brands = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-out',
            delay: 150,
        });
    }, [])
    return (
        <div data-aos="fade-up" className='container mx-auto my-12'>
            <div className='flex flex-col justify-center items-center shadow-lg bg-white rounded-lg px-6 mb-6'>
                <h2 className='text-4xl font-bold mb-3'>Brands</h2>
                <p className='text-center max-w-2xl'>Miss & Chief, Fisher-Price, Hot Wheels, Funskool, and Emob, are among the many brands that make stunning and the best toy cars for kids.</p>
                <Flicking
                    align="prev"
                    circular={true}
                    onMoveEnd={e => {
                        // console.log(e);
                    }}>

                    <div className="panel w-32 lg:w-96"><img src={brand1} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={brand2} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={brand3} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={brand4} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={brand5} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={brand6} alt="" /></div>

                </Flicking>
            </div>
        </div>
    );
};

export default Brands;