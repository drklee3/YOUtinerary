import { Card, Col, Icon, Row, TimePicker, Typography } from "antd";
import moment, { Moment } from "moment";
import React from "react";
import EventData from "../itinerary/EventData";

const { Paragraph, Text, Title } = Typography;

interface Props {
    event: EventData;
    onChangeName: (id: number, name: string) => void;
    onChangeDescription: (id: number, description: string) => void;
    onChangeStart: (id: number, start: Date) => void;
    onChangeEnd: (id: number, end: Date) => void;
}

class Event extends React.Component<Props> {
    onChangeName = (name: string): void => {
        this.props.onChangeName(this.props.event.id, name);
    };

    onChangeDescription = (description: string): void => {
        this.props.onChangeDescription(this.props.event.id, description);
    };

    onChangeStart = (time: Moment): void => {
        this.props.onChangeStart(this.props.event.id, time.toDate());
    };

    onChangeEnd = (time: Moment): void => {
        this.props.onChangeEnd(this.props.event.id, time.toDate());
    };

    render(): JSX.Element {
        const {
            name,
            description = "Add a description",
            start,
            end,
        } = this.props.event;

        return (
            <div style={{ padding: "10px" }}>
                <Card
                    type={"inner"}
                    style={{
                        width: "100%",
                    }}
                    hoverable={true}
                >
                    <Row>
                        <Col span={6}>
                            <Text strong>Start Time</Text>
                            <TimePicker
                                onChange={this.onChangeStart}
                                value={moment(start)}
                                minuteStep={15}
                                use12Hours={true}
                                allowClear={false}
                                format={"h:mm a"}
                                suffixIcon={<></>}
                                style={{ marginBottom: "24px" }}
                            />
                            <br />
                            <Text strong>End Time</Text>
                            <TimePicker
                                onChange={this.onChangeEnd}
                                value={moment(end)}
                                minuteStep={15}
                                use12Hours={true}
                                allowClear={false}
                                format={"h:mm a"}
                                suffixIcon={<></>}
                            />
                        </Col>
                        <Col span={17} offset={1}>
                            <Title
                                level={4}
                                editable={{ onChange: this.onChangeName }}
                            >
                                {name}
                            </Title>
                            <Paragraph>
                                <Icon type="environment" theme="twoTone" />{" "}
                                Location
                                <br />
                                <Icon type="star" theme="twoTone" /> Rating
                                <br />
                                <Icon type="dollar" theme="twoTone" /> Price
                            </Paragraph>
                            <Paragraph>
                                <Icon type="profile" theme="twoTone" />
                                <Text
                                    editable={{
                                        onChange: this.onChangeDescription,
                                    }}
                                >
                                    {" " + description}
                                </Text>
                            </Paragraph>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default Event;
