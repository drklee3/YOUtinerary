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

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData() {
    let res;
    do {
        res = await axios.get(GITHUB_STATS_ENDPOINT);
        if (res === 202) {
            console.log("GitHub responded with a 202, retrying in 1s");
            await sleep(1000);
        }
    } while (res.status === 202);

    return res;
}

exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions;

    let res;
    try {
        res = await fetchData();
        console.log("Fetched data from GitHub API:", res);
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
