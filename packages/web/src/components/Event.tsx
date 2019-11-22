import { TimePicker, Typography } from "antd";
import moment, { Moment } from "moment";
import React from "react";
import EventData from "../itinerary/EventData";

const { Paragraph } = Typography;

interface Props {
    event: EventData;
    onChangeName: (id: number, name: string) => void;
    onChangeStart: (id: number, start: Date) => void;
    onChangeEnd: (id: number, end: Date) => void;
}

class Event extends React.Component<Props> {
    onChangeName = (name: string): void => {
        this.props.onChangeName(this.props.event.id, name);
    };

    onChangeStart = (time: Moment): void => {
        this.props.onChangeStart(this.props.event.id, time.toDate());
    };

    onChangeEnd = (time: Moment): void => {
        this.props.onChangeEnd(this.props.event.id, time.toDate());
    };

    render(): JSX.Element {
        return (
            <div>
                <Paragraph editable={{ onChange: this.onChangeName }}>
                    {this.props.event.name}
                </Paragraph>
                <TimePicker
                    onChange={this.onChangeStart}
                    value={moment(this.props.event.start)}
                />
                to
                <TimePicker
                    onChange={this.onChangeEnd}
                    value={moment(this.props.event.end)}
                />
            </div>
        );
    }
}

export default Event;
