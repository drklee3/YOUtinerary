import { Col, Row } from "antd";
import React from "react";
import Layout from "../components/layout";
import SimpleMap from "../components/map-layout";
import Plan from "../components/Plan";
import SEO from "../components/seo";

const IndexPage = (): JSX.Element => (
    <Layout location="/plan">
        <SEO title="Plan" />
        <Row
            type="flex"
            justify="space-around"
            style={{
                height: "100%",
            }}
        >
            <Col xs={24} sm={24} md={24} lg={12} style={{ height: "100%" }}>
                <Plan />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
                <SimpleMap />
            </Col>
        </Row>
    </Layout>
);

export default IndexPage;
