import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello</h1>
            <h2>I'm Denzel, a web developer.</h2>
            <p>
                Need me? <Link to="/contact">Contact me.</Link>
            </p>
        </Layout>
    );
};

export default IndexPage;
