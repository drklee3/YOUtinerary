import { Card, Col, Icon, Row, TimePicker, Tooltip, Typography } from "antd";
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
    onRemove: (id: number) => void;
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

    onRemove = (): void => {
        this.props.onRemove(this.props.event.id);
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
                    <Row type={"flex"}>
                        <Col
                            md={{ span: 6, order: 1 }}
                            sm={{ span: 6, order: 1 }}
                            xs={{ span: 24, order: 2 }}
                        >
                            <Text strong>Start Time</Text>
                            <br />
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
                            <br />
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
                        <Col
                            md={{ span: 17, offset: 1, order: 2 }}
                            sm={{ span: 17, offset: 1, order: 2 }}
                            xs={{ span: 24, order: 1 }}
                        >
                            <Title
                                level={4}
                                editable={{ onChange: this.onChangeName }}
                            >
                                {name}
                            </Title>
                            <Tooltip title="Delete this event">
                                <Icon
                                    type="close-circle"
                                    theme="twoTone"
                                    style={{
                                        position: "absolute",
                                        right: 0,
                                        top: 0,
                                    }}
                                    onClick={this.onRemove}
                                />
                            </Tooltip>
                            <Paragraph>
                                <Icon
                                    type="environment"
                                    theme="twoTone"
                                    twoToneColor="#f04134"
                                />{" "}
                                Location
                                <br />
                                <Icon
                                    type="star"
                                    theme="twoTone"
                                    twoToneColor="#ffbf00"
                                />{" "}
                                Rating
                                <br />
                                <Icon
                                    type="dollar"
                                    theme="twoTone"
                                    twoToneColor="#00a854"
                                />{" "}
                                Price
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
