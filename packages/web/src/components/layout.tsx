/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Button, Layout as AntdLayout, Menu, Typography } from "antd";
import { graphql, navigate, useStaticQuery } from "gatsby";
import React from "react";

const { Text } = Typography;

const { Header, Content, Footer } = AntdLayout;

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <AntdLayout
            className="layout"
            style={{ background: "none", height: "100vh", width: "100vw" }}
        >
            <Header
                style={{
                    background: "none",
                    width: "100%",
                    margin: "auto",
                    padding: "0",
                }}
            >
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    style={{
                        lineHeight: "64px",
                    }}
                >
                    <Menu.Item
                        key="1"
                        style={{ float: "left", border: "none" }}
                        onClick={() => navigate("/")}
                    >
                        <b>YOUtinerary</b>
                    </Menu.Item>
                    <Menu.Item
                        key="3"
                        style={{ float: "right", border: "none" }}
                        onClick={() => navigate("/plan")}
                    >
                        <Button type="primary" shape="round" size="large">
                            Plan A Trip
                        </Button>
                    </Menu.Item>
                    <Menu.Item key="2" style={{ float: "right" }}>
                        About
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ height: "100%" }}>{children}</Content>
            <Footer>
                {data.title}
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
            </Footer>
        </AntdLayout>
    );
};

export default Layout;
