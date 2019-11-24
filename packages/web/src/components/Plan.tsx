import { Button, Card, Empty, Icon, Typography } from "antd";
import React from "react";
import {
    DragDropContext,
    Draggable,
    DraggableProvided,
    DraggableStateSnapshot,
    Droppable,
    DroppableProvided,
    DroppableStateSnapshot,
    DropResult,
    ResponderProvided,
} from "react-beautiful-dnd";
import EventData from "../itinerary/EventData";
import {
    addEvent,
    editEvent,
    editEventDescription,
    editEventEnd,
    editEventName,
    editEventStart,
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

const { Title } = Typography;

export interface Data {
    title: string;
}

interface State {
    data: Data;
    events: EventData[];
}

// should be same as Event/Props but without event field so can't really reuse
// it here
interface EventListProps {
    onChangeName: (id: number, name: string) => void;
    onChangeDescription: (id: number, description: string) => void;
    onChangeStart: (id: number, start: Date) => void;
    onChangeEnd: (id: number, end: Date) => void;
    onRemove: (id: number) => void;
}

function eventList(
    events: EventData[],
    eventActions: EventListProps
): JSX.Element {
    return (
        <div>
            {events.map((event, index) => (
                <Draggable
                    key={event.id}
                    draggableId={event.id.toString()}
                    index={index}
                >
                    {(
                        providedDraggable: DraggableProvided,
                        snapshotDraggable: DraggableStateSnapshot
                    ) => (
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
        </div>
    );
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
        console.log("didmount");
        const restoredData = restoreData();
        const restoredPlan = restorePlan();

        const restoredState = {
            ...(restoredData ? { data: restoredData } : {}),
            ...(restoredPlan ? { events: restoredPlan } : {}),
        };

        console.log(restoredState);

        this.setState(restoredState);
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

    removeEvent = (id: number): void => {
        this.setState({ events: removeEvent(this.state.events, id) });
    };

    render(): JSX.Element {
        return (
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
                    }}
                    actions={[
                        <Icon
                            onClick={this.addEvent}
                            type="plus-circle"
                            key="plus-circle"
                        />,
                    ]}
                    hoverable={true}
                >
                    {this.state.events.length > 0 ? (
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(
                                    provided: DroppableProvided,
                                    snapshot: DroppableStateSnapshot
                                ) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {eventList(this.state.events, {
                                            onChangeName: this.editEventName,
                                            onChangeDescription: this
                                                .editEventDescription,
                                            onChangeEnd: this.editEventEnd,
                                            onChangeStart: this.editEventStart,
                                            onRemove: this.removeEvent,
                                        })}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
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
                            <Button type="primary" onClick={this.addEvent}>
                                Add New Event
                            </Button>
                        </Empty>
                    )}
                </Card>
            </div>
        );
    }
}

export default Plan;
