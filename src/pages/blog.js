import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: { fields: date, order: DESC }) {
                edges {
                    node {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        slug
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <h1>Blog</h1>
            <ul className={blogStyles.list}>
                {data.allContentfulBlogPost.edges.map((item) => {
                    const slug = `/blog/${item.node.slug}`;
                    return (
                        <li>
                            <Link to={slug}>
                                <h2>{item.node.title}</h2>
                                <p>{item.node.date}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
};

export default BlogPage;
