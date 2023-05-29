import React, { useEffect } from 'react';
import Flicking from "@egjs/react-flicking";
import AOS from 'aos';
import 'aos/dist/aos.css';
// racing
import racing1 from '../../assets/racingCar/1-2-2.jpg'
import racing2 from '../../assets/racingCar/10.jpg'
import racing3 from '../../assets/racingCar/3-2.jpg'
import racing4 from '../../assets/racingCar/4-1-2.jpg'
import racing5 from '../../assets/racingCar/5-2-1.jpg'
import racing6 from '../../assets/racingCar/7-1-1.jpg'
// stylish
import stylish1 from '../../assets/stylishCar/1-9.jpg'
import stylish2 from '../../assets/stylishCar/2-8.jpg'
import stylish3 from '../../assets/stylishCar/4-8.jpg'
import stylish4 from '../../assets/stylishCar/5-10.jpg'
import stylish5 from '../../assets/stylishCar/5-5-9.jpg'
import stylish6 from '../../assets/stylishCar/6-9.jpg'
// clasic
import clasic1 from '../../assets/classicCar/16.jpg'
import clasic2 from '../../assets/classicCar/21.jpg'
import clasic3 from '../../assets/classicCar/3-1-5-300x188.jpg'
import clasic4 from '../../assets/classicCar/4.jpg'
import clasic5 from '../../assets/classicCar/4-1.jpg'
import clasic6 from '../../assets/classicCar/4-7-300x188.jpg'


const NewArrivalsCar = () => {
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

            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-4xl font-bold mb-6 text-center'>Rev up the Excitement: The Featured Toy Car!</h2>
                <p className='text-center max-w-2xl mb-12'>Experience the thrill of speed with our featured toy car! This compact yet powerful race car is designed to deliver excitement and entertainment for enthusiasts of all ages. With its sleek design and attention to detail, it's the perfect addition to any toy car collection. Get ready to ignite your imagination and embark on high-speed adventures with this captivating toy car.</p>
            </div>

            <div className='flex flex-col justify-center items-center shadow-lg bg-white rounded-lg px-6 mb-6'>
                <h4 className='text-xl font-bold mb-3 text-center'>Bburago Premium Series Formula 1 New Arrivals 2023</h4>
                <p className='text-center max-w-2xl'>All New 1:43 Scale Premium Collection by Bburago Available for Sale !</p>
                <Flicking
                    align="prev"
                    circular={true}
                    onMoveEnd={e => {
                        // console.log(e);
                    }}>

                    <div className="panel w-32 lg:w-96"><img src={racing1} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={racing2} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={racing3} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={racing4} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={racing5} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={racing6} alt="" /></div>

                </Flicking>
            </div>
            <div className='flex flex-col justify-center items-center shadow-lg bg-white rounded-lg px-6 mb-6'>
                <h4 className='text-xl font-bold mb-3 text-center'>1:18 Scale New Arrivals !!</h4>
                <p className='text-center max-w-2xl'>All New 1:18 Scale Collection Up for Sale !!</p>
                <Flicking
                    align="prev"
                    circular={true}
                    onMoveEnd={e => {
                        // console.log(e);
                    }}>

                    <div className="panel w-32 lg:w-96"><img src={stylish1} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={stylish2} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={stylish3} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={stylish4} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={stylish5} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={stylish6} alt="" /></div>

                </Flicking>
            </div>
            <div className='flex flex-col justify-center items-center shadow-lg bg-white rounded-lg px-6 mb-6'>
                <h4 className='text-xl font-bold mb-3 text-center'>Global Launch !!</h4>
                <p className='text-center max-w-2xl'>All new 1:24 Scale collection launched across the globe </p>
                <Flicking
                    align="prev"
                    circular={true}
                    onMoveEnd={e => {
                        // console.log(e);
                    }}>

                    <div className="panel w-32 lg:w-96"><img src={clasic1} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={clasic2} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={clasic3} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={clasic4} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={clasic5} alt="" /></div>
                    <div className="panel w-32 lg:w-96"><img src={clasic6} alt="" /></div>

                </Flicking>
            </div>
        </div>
    );
};

export default NewArrivalsCar;