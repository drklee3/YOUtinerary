/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Layout as AntdLayout, Typography } from "antd";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "../styles/style.less";
import Nav from "./Nav";

const { Text } = Typography;

const { Header, Content, Footer } = AntdLayout;

interface Props {
    children: JSX.Element[] | JSX.Element;
    location?: string;
}

const Layout = ({ children, location }: Props): JSX.Element => {
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
                <Nav location={location} />
            </Header>
            <Content style={{ height: "100%" }}>{children}</Content>
        </AntdLayout>
    );
};

export default Layout;
