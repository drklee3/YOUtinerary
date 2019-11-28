import { Icon, Tag } from "antd";
import React from "react";
import EventData from "../itinerary/EventData";

interface Props {
    event: EventData;
    $hover?: boolean;
    lat?: number;
    lng?: number;
}

const MARKER_SIZE = 60;

export class Marker extends React.Component<Props> {
    render(): JSX.Element {
        const { event, $hover } = this.props;

        return (
            <div
                style={{
                    position: "absolute",
                    width: MARKER_SIZE,
                    height: MARKER_SIZE,
                    left: -MARKER_SIZE / 2,
                    top: -MARKER_SIZE,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "center",
                }}
            >
                <div>
                    <Tag
                        color="#fafafa"
                        style={{
                            marginRight: 0,
                            marginBottom: $hover ? "4px" : "8px",
                            border: "1px solid rgb(217,217,217)",
                            color: "rgba(0,0,0,0.65)",
                        }}
                    >
                        {event.name}
                    </Tag>
                    <br />
                    <Icon
                        style={{
                            fontSize: $hover ? "34px" : "30px",
                            transition: "all .2s ease-in-out",
                        }}
                        key={event.id}
                        type="environment"
                        theme="twoTone"
                        twoToneColor={$hover ? "#f04134" : undefined}
                    />
                </div>
            </div>
        );
    }
}

export default Marker;
