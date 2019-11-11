module.exports = {
    siteMetadata: {
        title: "YOUtinerary",
        description: "Google Calendar and Maps, but worse.",
        author: "Derrick Lee <derrick@dlee.dev>",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            /* eslint-disable @typescript-eslint/camelcase */
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
            },
            /* eslint-enable */
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // "gatsby-plugin-offline",
        {
            resolve: "gatsby-plugin-typescript",
            options: {
                isTSX: false, // defaults to false
                jsxPragma: "React", // defaults to "React"
                allExtensions: false, // defaults to false
            },
        },
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                test: /\.ts$|\.tsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ["develop"],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
    ],
};
