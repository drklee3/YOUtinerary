/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require("axios");
const crypto = require("crypto");
/* eslint-enable */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const GITHUB_STATS_ENDPOINT =
    "https://api.github.com/repos/drklee3/YOUtinerary/stats/contributors";

exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions;

    let res;
    try {
        res = await axios.get(GITHUB_STATS_ENDPOINT);
        console.log("Fetched data from GitHub API:", res.data);
    } catch (e) {
        console.error("Failed to query GitHub API:", e);
    }

    createNode({
        id: "githubStats",
        internal: {
            type: "GithubStats",
            mediaType: "application/json",
            contentDigest: crypto
                .createHash("md5")
                .update(JSON.stringify(res.data))
                .digest("hex"),
            content: JSON.stringify(res.data),
        },
    });
    return;
};
