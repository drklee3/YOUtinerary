import { Button, Menu } from "antd";
import { ClickParam } from "antd/lib/menu";
import { navigate } from "gatsby";
import React from "react";

class Nav extends React.Component {
    state = {
        current: "mail",
    };

    handleClick = (e: ClickParam): void => {
        console.log("click ", e);
        this.setState({
            current: e,
        });
    };

    render(): JSX.Element {
        return (
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
        );
    }
}

export default Nav;
