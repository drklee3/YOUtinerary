import { Avatar, Card, Typography } from "antd";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const { Meta } = Card;

const { Title, Text } = Typography;

interface AboutPageProps {
    data: {
        githubStats: {
            internal: {
                content: string;
            };
        };
    };
}

interface WeekChanges {
    w: number;
    a: number;
    d: number;
    c: number;
}

function sumChanges(acc: WeekChanges, curr: WeekChanges): Partial<WeekChanges> {
    return {
        a: acc.a + curr.a,
        d: acc.d + curr.d,
    };
}

const AboutPage = ({ data }: AboutPageProps): JSX.Element => {
    // what a mess
    // fetches from the github api on site build.  each new push to master
    // triggers a new build so this will always be up to date without having to
    // query the api every page visit
    let dataJson;
    try {
        const origData = JSON.parse(data.githubStats.internal.content);
        if (!origData) {
            throw new Error(`failed to parse JSON ${origData}`);
        }
        origData.sort((a: any, b: any) => b.total - a.total);
        dataJson = origData.map((u: any) => {
            return {
                ...u,
                changes: u.weeks.reduce(sumChanges),
            };
        });
    } catch (e) {
        console.error("Failed to get GitHub contributors:", e);
    }

    return (
        <Layout location="/about">
            <SEO title="About" />
            <div
                style={{
                    height: "100%",
                    maxWidth: "1200px",
                    margin: "auto",
                    padding: "0 50px 100px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div>
                    <Title level={3}>
                        <a
                            href="https://github.com/drklee3/YOUtinerary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            drklee3/YOUtinerary
                        </a>
                    </Title>
                    <Text strong>
                        Project for CSCI 187: Design and Management of Software
                        at SCU.
                        <br />
                    </Text>
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
                    {dataJson !== undefined && (
                        <>
                            <Title level={4}>Contributors:</Title>
                            <Text>
                                {dataJson.map((u: any) => (
                                    <Card
                                        key={u.author.login}
                                        style={{
                                            margin: "10px",
                                            display: "inline-block",
                                        }}
                                    >
                                        <Meta
                                            avatar={
                                                <Avatar
                                                    src={u.author.avatar_url}
                                                />
                                            }
                                            title={
                                                <a
                                                    href={u.author.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {u.author.login}
                                                </a>
                                            }
                                            description={
                                                <Text>
                                                    {u.total} commits
                                                    <br />
                                                    <Text
                                                        style={{
                                                            color: "#6cc644",
                                                        }}
                                                    >
                                                        {u.changes.a.toLocaleString()}{" "}
                                                        ++
                                                    </Text>{" "}
                                                    <Text
                                                        style={{
                                                            color: "#f44",
                                                        }}
                                                    >
                                                        {u.changes.d.toLocaleString()}{" "}
                                                        --
                                                    </Text>
                                                </Text>
                                            }
                                        />
                                    </Card>
                                ))}
                            </Text>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query AboutPageQuery {
        githubStats {
            internal {
                content
            }
        }
    }
`;

export default AboutPage;
