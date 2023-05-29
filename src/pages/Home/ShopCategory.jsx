import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SportsCar from './ShopCategoryTab/SportsCar';
import PoliceCar from './ShopCategoryTab/PoliceCar';
import RegularCar from './ShopCategoryTab/RegularCar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShopCategory = () => {    
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch("https://ph-assignment-11-server-marufbroh.vercel.app/category-toys")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setToys(data)
            })
    }, [])

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-out',
            delay: 150,
        });
    }, [])

    const sportsCars = toys.filter(toy => toy.sub_category === "sports-car")
    const policeCars = toys.filter(toy => toy.sub_category === "police-car")
    const regularCars = toys.filter(toy => toy.sub_category === "regular-car")
    // console.log(sportsCars, policeCars, regularCars);

    return (
        <div data-aos="fade-up" className='container mx-auto my-12'>
            <div className='flex flex-col justify-center items-center mb-6'>
                <h2 className="text-2xl lg:text-4xl font-bold mb-4">Shop by Category</h2>
                <p className="text-gray-600 lg:max-w-2xl text-center">
                    Explore our wide range of categories and find the perfect toy car for you or your loved ones. Whether you're a fan of classic muscle cars, sleek sports cars, or off-road adventures, we have something for everyone. Browse our collection and embark on a thrilling journey through the world of toy cars.
                </p>
            </div>
            <Tabs className={"flex flex-col justify-center items-center"}>
                <TabList className={"tabs"} >
                    <Tab className={"tab tab-lg tab-lifted"}>Sports Car</Tab>
                    <Tab className={"tab tab-lg tab-lifted"}>Police Car</Tab>
                    <Tab className={"tab tab-lg tab-lifted"}>Regular Car</Tab>
                </TabList>

                <TabPanel >
                    <div className={"grid grid-cols-1 lg:grid-cols-3 gap-6 my-6"}>
                        {
                            sportsCars.map(sCar => <SportsCar key={sCar._id} sCar={sCar} />)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className={"grid grid-cols-1 lg:grid-cols-3 gap-6 my-6"}>
                        {
                            policeCars.map(pCar => <PoliceCar key={pCar._id} pCar={pCar} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className={"grid grid-cols-1 lg:grid-cols-3 gap-6 my-6"}>
                        {
                            regularCars.map(rCar => <RegularCar key={rCar._id} rCar={rCar} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;