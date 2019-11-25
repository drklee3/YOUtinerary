import { Menu } from "antd";
import { ClickParam } from "antd/lib/menu";
import { navigate } from "gatsby";
import React from "react";

interface Props {
    location?: string;
}

class Nav extends React.Component<Props> {
    handleClick = (e: ClickParam): void => {
        console.log("click ", e);
        this.setState({
            current: e,
        });
    };

    render(): JSX.Element {
        const { location = "/" } = this.props;
        console.log(this.props);

        return (
            <Menu
                theme="light"
                mode="horizontal"
                selectedKeys={[location]}
                style={{
                    lineHeight: "64px",
                }}
            >
                <Menu.Item
                    key="/"
                    style={{ float: "left", border: "none" }}
                    onClick={() => navigate("/")}
                >
                    <b>YOUtinerary</b>
                </Menu.Item>
                <Menu.Item
                    key="/github"
                    style={{ float: "right", border: "none" }}
                >
                    <a
                        href="https://github.com/drklee3/YOUtinerary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </Menu.Item>
                <Menu.Item
                    key="/about"
                    style={{ float: "right" }}
                    onClick={() => navigate("/about")}
                >
                    About
                </Menu.Item>
            </Menu>
        );
    }
}

export default Nav;
