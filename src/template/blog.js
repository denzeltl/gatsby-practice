import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            date(formatString: "MMMM DD, YYYY")
            body {
                json
            }
        }
    }
`;

const Blog = ({ data }) => {
    const options = {
        renderNode: {
            'embedded-asset-block': (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const src = node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={src} />;
            },
        },
    };

    return (
        <Layout>
            <Head title={data.contentfulBlogPost.title} />
            <h1>{data.contentfulBlogPost.title}</h1>
            <p>{data.contentfulBlogPost.date}</p>
            <div>{documentToReactComponents(data.contentfulBlogPost.body.json, options)}</div>
        </Layout>
    );
};

export default Blog;
