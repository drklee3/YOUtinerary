import { Button, Col, Icon, Row, Typography } from "antd";
import { Link } from "gatsby";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";
import TweenOne from "rc-tween-one";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const { Title } = Typography;

const IndexPage = (): JSX.Element => (
    <>
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
                <Col span={24}>
                    <Title level={1} style={{ fontSize: "68px" }}>
                        <Texty>Plan Your Trip</Texty>
                    </Title>
                    <Link to="/plan">
                        <TweenOne
                            animation={{
                                x: 0,
                                opacity: 1,
                                repeat: 0,
                                reverse: true,
                                duration: 1200,
                                ease: "easeOutQuart",
                            }}
                            style={{
                                transform: "translateX(-50px)",
                                opacity: 0,
                            }}
                        >
                            <Button type="primary" size="large" shape="round">
                                Get Started <Icon type="arrow-right" />
                            </Button>
                        </TweenOne>
                    </Link>
                </Col>
            </Row>
        </Layout>
        <img
            src="/landingBg.svg"
            style={{
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                objectPosition: "60% center",
            }}
        />
    </>
);

export default IndexPage;
