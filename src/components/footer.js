import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetaData {
                    title
                }
            }
        }
    `);
    return (
        <footer>
            <p>Created by {data.site.siteMetaData.author} © 2020</p>
        </footer>
    );
};

export default Footer;
