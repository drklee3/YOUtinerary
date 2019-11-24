/**
 * IMPORTANT NOTE: These functions are used to modify event arrays that are
 * stored in React state.  We do NOT want to mutate the state directly without
 * setState() as it could potentially lead to error prone code.  Since arrays
 * are passed by "reference," be sure to make a copy via spread operator or
 * slice() before modifying the array.  This does use more memory as we are
 * making array copies but it is more important to avoid errors that could be
 * raised.
 */

import EventData from "./EventData";

export function addEvent(events: EventData[]): EventData[] {
    // Max of event ids + 1
    const nextId = Math.max(...events.map((event) => event.id), -1) + 1;
    const newEvent = new EventData(nextId, "New Event", new Date(), new Date());

    return [...events, newEvent];
}

export function reorderEvent(
    events: EventData[],
    startIndex: number,
    endIndex: number
): EventData[] {
    const result = [...events];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
}

export function removeEvent(events: EventData[], id: number): EventData[] {
    return events.filter((e) => e.id !== id);
}

export function findEventIndex(events: EventData[], id: number): number {
    return events.findIndex((e) => e.id === id);
}

export function findEvent(
    events: EventData[],
    target: number
): EventData | undefined {
    const index = findEventIndex(events, target);

    if (index === -1) {
        return undefined;
    }

    return events[index];
}

export function editEvent(
    events: EventData[],
    modifiedEvent: EventData
): EventData[] {
    const index = findEventIndex(events, modifiedEvent.id);

    // return unmodified array if can't find
    if (index === -1) {
        return events;
    }

    const result = [...events];

    result[index] = modifiedEvent;
    return result;
}

function editEventField(
    events: EventData[],
    id: number,
    key: "name" | "description" | "start" | "end",
    value: any
): EventData[] {
    const index = findEventIndex(events, id);

    if (index === -1) {
        return events;
    }

    const result = [...events];

    result[index][key] = value;
    return result;
}

export function editEventName(
    events: EventData[],
    id: number,
    name: string
): EventData[] {
    return editEventField(events, id, "name", name);
}

export function editEventDescription(
    events: EventData[],
    id: number,
    description: string
): EventData[] {
    return editEventField(events, id, "description", description);
}

export function editEventStart(
    events: EventData[],
    id: number,
    start: Date
): EventData[] {
    return editEventField(events, id, "start", start);
}

export function editEventEnd(
    events: EventData[],
    id: number,
    end: Date
): EventData[] {
    return editEventField(events, id, "end", end);
}
