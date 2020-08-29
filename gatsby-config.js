module.exports = {
    siteMetadata: {
        title: 'Gatsby Practice',
        author: 'Denzel.',
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
    ],
};
