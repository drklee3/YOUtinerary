import { PlaceSearchResult } from "@google/maps";
import { Button, Card, Col, Empty, Icon, Row, Tooltip, Typography } from "antd";
import QueueAnim from "rc-queue-anim";
import React from "react";
import {
    DragDropContext,
    Draggable,
    DraggableProvided,
    Droppable,
    DroppableProvided,
    DropResult,
    ResponderProvided,
} from "react-beautiful-dnd";
import MapView from "../components/MapView";
import EventData from "../itinerary/EventData";
import {
    addEvent,
    editEvent,
    editEventDescription,
    editEventEnd,
    editEventMapsData,
    editEventName,
    editEventStart,
    editEventUserLocation,
    removeAllEvents,
    removeEvent,
    reorderEvent,
} from "../itinerary/PlanHelpers";
import {
    restoreData,
    restorePlan,
    saveData,
    savePlan,
} from "../itinerary/store";
import Event from "./Event";

const { Title, Text } = Typography;

// should be same as Event/Props but without event field so can't really reuse
// it here
interface EventListProps {
    onChangeName: (id: number, name: string) => void;
    onChangeDescription: (id: number, description: string) => void;
    onChangeStart: (id: number, start: Date) => void;
    onChangeEnd: (id: number, end: Date) => void;
    onChangeUserLocation: (id: number, userLocation: string) => void;
    onChangeMapsData: (
        id: number,
        mapsData?: Partial<PlaceSearchResult>
    ) => void;
    onRemove: (id: number) => void;
}

function eventList(
    events: EventData[],
    eventActions: EventListProps
): JSX.Element {
    return (
        <div>
            <QueueAnim duration={800} type={["right", "left"]}>
                {events.map((event, index) => (
                    <Draggable
                        key={event.id}
                        draggableId={event.id.toString()}
                        index={index}
                    >
                        {(providedDraggable: DraggableProvided) => (
                            <div
                                ref={providedDraggable.innerRef}
                                {...providedDraggable.draggableProps}
                                {...providedDraggable.dragHandleProps}
                            >
                                <Event event={event} {...eventActions} />
                                {providedDraggable.placeholder}
                            </div>
                        )}
                    </Draggable>
                ))}
            </QueueAnim>
        </div>
    );
}

export interface Data {
    title: string;
}

interface State {
    data: Data;
    events: EventData[];
}

export class Plan extends React.Component<{}, State> {
    state: State = {
        data: { title: "Your Plan" },
        events: [],
    };

    constructor(props: {}) {
        super(props);
    }

    componentDidMount(): void {
        const restoredData = restoreData();
        const restoredPlan = restorePlan();

        if (restoredPlan) {
            console.log("Restored plan from browser");
        }

        // if no restored state, use an empty plan and default title
        this.setState({
            data: restoredData
                ? { title: restoredData.title }
                : { title: "Your Plan" },
            events: restoredPlan ? restoredPlan : [],
        });
    }

    componentDidUpdate(): void {
        // update persistent data store
        savePlan(this.state.events);
        saveData(this.state.data);
    }

    onChangeTitle = (title: string): void => {
        this.setState({ data: { title } });
    };

    onDragEnd = (result: DropResult, provided: ResponderProvided): void => {
        console.log(result, provided);

        if (!result.destination) {
            return;
        }

        const reorderedEvents = reorderEvent(
            this.state.events,
            result.source.index,
            result.destination.index
        );

        this.setState({ events: reorderedEvents });
    };

    addEvent = (): void => {
        this.setState({
            events: addEvent(this.state.events),
        });
    };

    editEvent = (modified: EventData): void => {
        this.setState({ events: editEvent(this.state.events, modified) });
    };

    editEventName = (id: number, name: string): void => {
        this.setState({ events: editEventName(this.state.events, id, name) });
    };

    editEventDescription = (id: number, description: string): void => {
        this.setState({
            events: editEventDescription(this.state.events, id, description),
        });
    };

    editEventStart = (id: number, start: Date): void => {
        this.setState({ events: editEventStart(this.state.events, id, start) });
    };

    editEventEnd = (id: number, end: Date): void => {
        this.setState({ events: editEventEnd(this.state.events, id, end) });
    };

    editEventUserLocation = (id: number, userLocation: string): void => {
        this.setState({
            events: editEventUserLocation(this.state.events, id, userLocation),
        });
    };

    editEventMapsData = (
        id: number,
        mapsData?: Partial<PlaceSearchResult>
    ): void => {
        this.setState({
            events: editEventMapsData(this.state.events, id, mapsData),
        });
    };

    removeEvent = (id: number): void => {
        this.setState({ events: removeEvent(this.state.events, id) });
    };

    removeAllEvents = (): void => {
        this.setState({ events: removeAllEvents(this.state.events) });
    };

    render(): JSX.Element {
        return (
            <Row
                type="flex"
                justify="space-around"
                style={{
                    height: "100%",
                }}
            >
                <Col xs={24} sm={24} md={24} lg={12} style={{ height: "100%" }}>
                    <div
                        style={{
                            padding: "20px",
                            height: "100%",
                            maxHeight: "100%",
                            overflowY: "scroll",
                        }}
                    >
                        <Card
                            title={
                                <Title
                                    level={3}
                                    editable={{ onChange: this.onChangeTitle }}
                                >
                                    {this.state.data.title}
                                </Title>
                            }
                            bordered={true}
                            style={{
                                width: "100%",
                                minHeight: "100%",
                            }}
                            extra={
                                <Tooltip title="Delete all events">
                                    <Icon
                                        type="close-circle"
                                        theme="twoTone"
                                        onClick={this.removeAllEvents}
                                    />
                                </Tooltip>
                            }
                        >
                            {this.state.events.length > 0 ? (
                                <>
                                    <DragDropContext onDragEnd={this.onDragEnd}>
                                        <Droppable droppableId="droppable">
                                            {(provided: DroppableProvided) => (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                >
                                                    {eventList(
                                                        this.state.events,
                                                        {
                                                            onChangeName: this
                                                                .editEventName,
                                                            onChangeDescription: this
                                                                .editEventDescription,
                                                            onChangeEnd: this
                                                                .editEventEnd,
                                                            onChangeStart: this
                                                                .editEventStart,
                                                            onChangeUserLocation: this
                                                                .editEventUserLocation,
                                                            onChangeMapsData: this
                                                                .editEventMapsData,
                                                            onRemove: this
                                                                .removeEvent,
                                                        }
                                                    )}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </DragDropContext>
                                    <QueueAnim
                                        delay={400}
                                        duration={500}
                                        type={"bottom"}
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Button
                                            key={1}
                                            type="primary"
                                            onClick={this.addEvent}
                                            style={{ marginTop: "8px" }}
                                        >
                                            <Text>Add a new event</Text>
                                        </Button>
                                    </QueueAnim>
                                </>
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
                                    <Button
                                        type="primary"
                                        onClick={this.addEvent}
                                    >
                                        Add a new event
                                    </Button>
                                </Empty>
                            )}
                        </Card>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <MapView events={this.state.events} />
                </Col>
            </Row>
        );
    }
}

export default Plan;
