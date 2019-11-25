import { Col, Row, Typography } from "antd";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const { Title, Text } = Typography;

const AboutPage = (): JSX.Element => (
    <Layout location="/about">
        <SEO title="About" />

        <Row
            type="flex"
            justify="space-around"
            align="middle"
            style={{
                height: "100%",
                maxWidth: "1200px",
                margin: "auto",
                padding: "0 50px 100px",
            }}
        >
            <Col span={24}>
                <Title level={3}>
                    <a
                        href="https://github.com/drklee3/YOUtinerary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        drklee3/YOUtinerary
                    </a>
                </Title>
                <Title level={4}>
                    Project for CSCI 187: Design and Management of Software at
                    SCU.
                </Title>
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
            </Col>
        </Row>
    </Layout>
);

export default AboutPage;
