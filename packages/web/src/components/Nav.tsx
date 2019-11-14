import { Menu } from "antd";
import { ClickParam } from "antd/lib/menu";
import { Link } from "gatsby";
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

    render() {
        return (
            <Menu
                theme="dark"
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Nav;
