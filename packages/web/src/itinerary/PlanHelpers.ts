import EventData from "./EventData";

export function addEvent(events: EventData[]): EventData[] {
    // Max of event ids + 1
    const nextId = Math.max(...events.map((event) => event.id), -1) + 1;
    const newEvent = new EventData(nextId, "New Event", new Date(), new Date());

    events.push(newEvent);
    return events;
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

    events[index] = modifiedEvent;
    return events;
}

function editEventField(
    events: EventData[],
    id: number,
    key: "name" | "start" | "end",
    value: any
): EventData[] {
    const index = findEventIndex(events, id);

    if (index === -1) {
        return events;
    }

    events[index][key] = value;
    return events;
}

export function editEventName(
    events: EventData[],
    id: number,
    name: string
): EventData[] {
    return editEventField(events, id, "name", name);
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
