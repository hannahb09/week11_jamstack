module.exports = {
    plugins: [
        'gatsby-plugin-typography',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/pages`,
            }
        },
        'gatsby-transformer-remark',
        ]
    }