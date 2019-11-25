import { Typography } from "antd";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const { Text } = Typography;

const AboutPage = (): JSX.Element => (
    <Layout location="/about">
        <SEO title="About" />
        <p>yaya</p>
        <Text strong>
            <a
                href="https://github.com/drklee3/YOUtinerary"
                target="_blank"
                rel="noopener noreferrer"
            >
                drklee3/YOUtinerary
            </a>
        </Text>
        <br />
        <Text>
            Source code licensed{" "}
            <a
                href="https://opensource.org/licenses/mit-license.php"
                target="_blank"
                rel="noopener noreferrer"
            >
                MIT
            </a>
        </Text>
    </Layout>
);

export default AboutPage;
