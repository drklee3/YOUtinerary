import { Button, Card, Empty, Icon, List, Typography } from "antd";
import React from "react";
import { Event as EventData } from "../itinerary/event";
import Event from "./Event";

const { Paragraph, Title } = Typography;

interface State {
    title: string;
    plan: EventData[];
}

export class Plan extends React.Component<{}, State> {
    state = {
        title: "Your Plan",
        plan: [new EventData(1, "test event", new Date(), new Date())],
    };

    constructor(props: {}) {
        super(props);

        this.addEvent = this.addEvent.bind(this);
    }

    onChangeTitle = (title: string): void => {
        this.setState({ title });
    };

    addEvent(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
        const nextId =
            this.state.plan.reduce((prev, curr) =>
                prev.id > curr.id ? prev : curr
            ).id + 1;
        this.setState({
            plan: [
                ...this.state.plan,
                new EventData(nextId, "new event", new Date(), new Date()),
            ],
        });
    }

    render(): JSX.Element {
        return (
            <div style={{ padding: "20px" }}>
                <Card
                    title={
                        <Title
                            level={3}
                            editable={{ onChange: this.onChangeTitle }}
                        >
                            {this.state.title}
                        </Title>
                    }
                    bordered={true}
                    style={{ width: "100%", height: "100%" }}
                    actions={[
                        <Icon
                            onClick={this.addEvent}
                            type="plus-circle"
                            key="plus-circle"
                        />,
                    ]}
                    hoverable={true}
                >
                    {this.state.plan.length > 0 ? (
                        <List
                            dataSource={this.state.plan}
                            renderItem={(event) => (
                                <List.Item>
                                    <Event event={event} />
                                </List.Item>
                            )}
                        />
                    ) : (
                        <Empty
                            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                            imageStyle={{
                                height: 60,
                            }}
                            description={
                                <span>{"You have no events! :("}</span>
                            }
                        >
                            <Button type="primary">Add New Event</Button>
                        </Empty>
                    )}
                </Card>
            </div>
        );
    }
}

export default Plan;
