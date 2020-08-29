import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>This is a bio.</p>
            <p>This is another bio.</p>
            <Link to="/contact">Contact me.</Link>
        </Layout>
    );
};

export default AboutPage;
