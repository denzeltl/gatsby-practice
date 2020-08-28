import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = () => {
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
        <header className={headerStyles.header}>
            <h1 className={headerStyles.logo}>
                <Link to="/">{data.site.siteMetaData.title}</Link>
            </h1>
            <nav className={headerStyles.navList}>
                <ul className={headerStyles.navList}>
                    <li className={headerStyles.navItem}>
                        <Link className={headerStyles.navItemLink} activeClassName={headerStyles.navItemLinkActive} to="/">
                            Home
                        </Link>
                    </li>
                    <li className={headerStyles.navItem}>
                        <Link className={headerStyles.navItemLink} activeClassName={headerStyles.navItemLinkActive} to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li className={headerStyles.navItem}>
                        <Link className={headerStyles.navItemLink} activeClassName={headerStyles.navItemLinkActive} to="/about">
                            About
                        </Link>
                    </li>
                    <li className={headerStyles.navItem}>
                        <Link className={headerStyles.navItemLink} activeClassName={headerStyles.navItemLinkActive} to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
