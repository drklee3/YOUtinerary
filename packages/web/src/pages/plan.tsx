import { Col, Row } from "antd";
import "antd/dist/antd.css";
import React from "react";
import Layout from "../components/layout";
import Plan from "../components/Plan";
import SEO from "../components/seo";

const IndexPage = (): JSX.Element => (
    <Layout>
        <SEO title="Plan" />
        <Row
            type="flex"
            justify="space-around"
            style={{
                height: "100%",
                padding: "0 20px",
            }}
        >
            <Col span={12}>
                <Plan />
            </Col>
            <Col span={12}>map</Col>
        </Row>
    </Layout>
);

export default IndexPage;
