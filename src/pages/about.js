import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About</h1>
            <p>This is a bio.</p>
            <p>This is another bio.</p>
            <Link to="/contact">Contact me.</Link>
            <Footer />
        </div>
    );
};

export default AboutPage;
