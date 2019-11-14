import { TimePicker, Typography } from "antd";
import moment from "moment";
import React from "react";
import { Event as EventData } from "../itinerary/event";

const { Paragraph } = Typography;

interface Props {
    event: EventData;
    onChange?: (value: string) => void;
}

class Event extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <div>
                <Paragraph editable={{ onChange: this.props.onChange }}>
                    {this.props.event.name}
                </Paragraph>
                <TimePicker defaultValue={moment(this.props.event.start)} />
                to
                <TimePicker defaultValue={moment(this.props.event.end)} />
            </div>
        );
    }
}

export default Event;
