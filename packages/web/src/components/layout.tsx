/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Nav from "./Nav";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Layout as AntdLayout } from "antd";

import "./layout.css";

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
        <>
            <AntdLayout className="layout">
                <Header>
                    <Nav />
                </Header>
                <Content style={{ padding: "0 50px" }}>
                    <div
                        style={{
                            background: "#fff",
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    {data.title} ©2018 Created by Ant UED
                </Footer>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </AntdLayout>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;