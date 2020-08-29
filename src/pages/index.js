import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hello</h1>
            <h2>I'm Denzel.</h2>
            <Link to="/contact">Contact me.</Link>
        </Layout>
    );
};

export default IndexPage;
