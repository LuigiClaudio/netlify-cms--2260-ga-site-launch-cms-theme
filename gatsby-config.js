const pkg = require(`./package.json`);

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
                enableIdentityWidget: true,
                manualInit: true,
                publicPath: 'admin',
                htmlTitle: 'admin',
            },
        },
        {
            // This is only needed temporarily. Themes will automatically be transpiled in later versions.
            resolve: 'gatsby-plugin-compile-es6-packages',
            options: {
                modules: [pkg.name],
            },
        },
    ],
};
