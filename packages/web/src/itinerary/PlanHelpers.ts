/**
 * IMPORTANT NOTE: These functions are used to modify event arrays that are
 * stored in React state.  We do NOT want to mutate the state directly without
 * setState() as it could potentially lead to error prone code.  Since arrays
 * are passed by "reference," be sure to make a copy via spread operator or
 * slice() before modifying the array.  This does use more memory as we are
 * making array copies but it is more important to avoid errors that could be
 * raised.
 */

import {
    DirectionsRequest,
    LatLngLiteral,
    PlaceSearchResult,
} from "@google/maps";
import _ from "lodash";
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
    // change order of index in events array
    const result = [...events];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    
    // change start/end times based on where event is moved to
    const notMoved = startIndex === endIndex;
    const movedToBeginning = endIndex === 0;
    const movedToEnd = endIndex === result.length - 1;
    const hourOffset = 1;

    if (notMoved) {
        // do nothing
    } else if (movedToBeginning) {
        const newEnd = result[endIndex + 1].start; // next start
        const newStart = new Date(newEnd.getTime());
        newStart.setHours(newStart.getHours() - hourOffset);
        result[endIndex].start.setTime(newStart);
        result[endIndex].end.setTime(newEnd);
    } else if (movedToEnd) {
        const newStart = result[endIndex - 1].end; // previous end
        const newEnd = new Date(newStart.getTime());
        newEnd.setHours(newEnd.getHours() + hourOffset);
        result[endIndex].start.setTime(newStart);
        result[endIndex].end.setTime(newEnd);
    } else {
        const newStart = result[endIndex - 1].end; // previous end
        const newEnd = result[endIndex + 1].start; // next start
        result[endIndex].start.setTime(newStart);
        result[endIndex].end.setTime(newEnd);
    }

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
    key: "name" | "description" | "start" | "end" | "userLocation" | "mapsData",
    value: any
): EventData[] {
    const index = findEventIndex(events, id);

    if (index === -1) {
        return events;
    }

    const result = _.cloneDeep(events);
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

export function editEventUserLocation(
    events: EventData[],
    id: number,
    userLocation: string
): EventData[] {
    return editEventField(events, id, "userLocation", userLocation);
}

export function editEventMapsData(
    events: EventData[],
    id: number,
    mapsData?: Partial<PlaceSearchResult>
): EventData[] {
    return editEventField(events, id, "mapsData", mapsData);
}

export function getWayPoints(events: EventData[]): LatLngLiteral[] {
    // stupid way to filter out events without coords
    // https://github.com/microsoft/TypeScript/issues/16069
    return events
        .map(
            (e) => e.mapsData?.geometry?.location || { lat: 12345, lng: 12345 }
        )
        .filter((e) => e.lat !== 12345);
}

export function getDirectionsRequest(
    coords: LatLngLiteral[]
): DirectionsRequest | undefined {
    if (coords.length < 2) {
        return;
    }

    return {
        origin: coords.splice(0, 1)[0], // first element & remove
        destination: coords.pop()!, // last element & remove
        waypoints: coords, // middle elements
    };
}
