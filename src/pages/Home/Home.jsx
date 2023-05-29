import React from 'react';
import ShopCategory from './ShopCategory';
import Banner from './Banner';
import GallerySection from './GallerySection';
import NewArrivalsCar from './NewArrivalsCar';
import ContactForm from './ContactForm';
import Brands from './Brands';
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";


const Home = () => {
    document.title = "Toy KingDom || Home"
    return (
        <div>
            <Banner />
            <GallerySection />
            <ShopCategory />
            <NewArrivalsCar />
            <ContactForm />
            <Brands/>
        </div>
    );
};

export default Home;