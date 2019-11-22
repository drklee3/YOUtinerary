import { Button, Col, Icon, Row, Typography } from "antd";
import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const { Title } = Typography;

const IndexPage = (): JSX.Element => (
    <Layout>
        <SEO title="Home" />
        <Row
            type="flex"
            justify="space-around"
            align="middle"
            style={{
                height: "100%",
                maxWidth: "1200px",
                margin: "auto",
                padding: "0 50px",
            }}
        >
            <Col span={12}>
                <Title level={1} style={{ fontSize: "68px" }}>
                    Plan Your Trip
                </Title>
                <Link to="/plan">
                    <Button type="primary" size="large" shape="round">
                        Get Started <Icon type="arrow-right" />
                    </Button>
                </Link>
            </Col>
            <Col span={12}></Col>
        </Row>
    </Layout>
);

export default IndexPage;
