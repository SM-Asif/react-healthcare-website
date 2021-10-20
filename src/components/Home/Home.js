import React from 'react';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import Faq from './Faq/Faq';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Faq></Faq>
        </div>
    );
};

export default Home;