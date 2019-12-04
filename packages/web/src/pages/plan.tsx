import React from "react";
import Layout from "../components/layout";
import Plan from "../components/Plan";
import SEO from "../components/seo";

const IndexPage = (): JSX.Element => (
    <Layout location="/plan">
        <SEO title="Plan" />
        <Plan />
    </Layout>
);

export default IndexPage;
