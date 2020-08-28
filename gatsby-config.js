module.exports = {
    siteMetaData: {
        title: 'Gatsby Practice',
        author: 'Denzel.',
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
    ],
};
