import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <div>
            <Header />
            <h1>Hello</h1>
            <h2>I'm Denzel, a web developer.</h2>
            <p>
                Need me? <Link to="/contact">Contact me.</Link>
            </p>
            <Footer />
        </div>
    );
};

export default IndexPage;
