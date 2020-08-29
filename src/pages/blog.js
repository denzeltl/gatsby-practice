import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    const list = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <h1>Blog</h1>
            <ul className={blogStyles.list}>
                {list.map((item) => {
                    const slug = `/blog/${item.node.fields.slug}`;
                    return (
                        <li>
                            <Link to={slug}>
                                <h2>{item.node.frontmatter.title}</h2>
                                <p>{item.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
};

export default BlogPage;
