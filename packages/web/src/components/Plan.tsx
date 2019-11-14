import { Button, Card, Empty, Icon } from "antd";
import React from "react";
import { Event as EventData } from "../itinerary/event";
import Event from "./Event";

interface State {
    plan: EventData[];
}

export class Plan extends React.Component<{}, State> {
    state = {
        plan: [new EventData(1, "test event", new Date(), new Date())],
    };

    constructor(props: {}) {
        super(props);

        this.addEvent = this.addEvent.bind(this);
    }

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
            <Card
                title="Your Plan"
                bordered={false}
                style={{ width: 300 }}
                actions={[
                    <Icon
                        onClick={this.addEvent}
                        type="plus-circle"
                        key="plus-circle"
                    />,
                ]}
            >
                {this.state.plan.length > 0 ? (
                    this.state.plan.map((event, i) => (
                        <Event event={event} key={i} />
                    ))
                ) : (
                    <Empty
                        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                        imageStyle={{
                            height: 60,
                        }}
                        description={<span>{"You have no events! :("}</span>}
                    >
                        <Button type="primary">Add New Event</Button>
                    </Empty>
                )}
            </Card>
        );
    }
}

export default Plan;
