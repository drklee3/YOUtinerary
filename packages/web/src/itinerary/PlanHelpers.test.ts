import { PlaceSearchResult } from "@google/maps";
import EventData from "./EventData";
import {
    addEvent,
    editEvent,
    editEventName,
    editEventStart,
    findEvent,
    getWayPoints,
    removeEvent,
    reorderEvent,
} from "./PlanHelpers";

export function newPlan(): EventData[] {
    let plan = addEvent([]);
    plan = addEvent(plan);
    plan = addEvent(plan);
    return plan;
}

export function mockLocation(
    lat: number,
    lng: number
): Partial<PlaceSearchResult> {
    /* eslint-disable @typescript-eslint/camelcase */
    const loc: Partial<PlaceSearchResult> = {
        geometry: {
            location: {
                lat,
                lng,
            },
            viewport: {
                northeast: {
                    lat: 37.77698142989272,
                    lng: -122.4244912201073,
                },
                southwest: {
                    lat: 37.77428177010728,
                    lng: -122.4271908798927,
                },
            },
            location_type: "GEOMETRIC_CENTER",
            bounds: {
                northeast: {
                    lat: 123,
                    lng: 123,
                },
                southwest: {
                    lat: 123,
                    lng: 123,
                },
            },
        },
    };
    /* eslint-enable */

    return loc;
}

describe("plan", () => {
    it("should correctly add events", () => {
        const plan = newPlan();

        expect(plan.length).toBe(3);
        expect(plan.map((e) => e.id)).toEqual([0, 1, 2]);
    });

    it("should correctly edit events", () => {
        let plan = newPlan();

        const newEvent = new EventData(
            1,
            "modified event",
            new Date(),
            new Date()
        );

        plan = editEvent(plan, newEvent);

        expect(plan[1]).toEqual(newEvent);
    });

    it("should correctly edit event names", () => {
        const plan = newPlan();

        const test = editEventName(plan, 1, "my name was changed");

        expect(test[1].name).toBe("my name was changed");
    });

    it("should correctly edit event start", () => {
        const plan = newPlan();

        const start = new Date(123456789);
        const test = editEventStart(plan, 1, start);

        expect(test[1].start).toBe(start);
    });

    it("should correctly edit event end", () => {
        const plan = newPlan();

        const end = new Date(987654321);
        const test = editEventStart(plan, 1, end);

        expect(test[1].start).toBe(end);
    });

    it("should correctly remove events", () => {
        let plan = newPlan();

        plan = removeEvent(plan, 1);

        expect(plan.length).toBe(2);
        expect(plan.map((e) => e.id)).toEqual([0, 2]);
    });

    it("should correctly find events", () => {
        const plan = newPlan();

        const e = findEvent(plan, 1);
        expect(e).toEqual(plan[1]);
    });

    it("should correctly reorder events", () => {
        const plan = newPlan();

        const reorderedPlan = reorderEvent(plan, 1, 2);
        expect(reorderedPlan.map((e) => e.id)).toEqual([0, 2, 1]);
    });

    it("should correctly get waypoints", () => {
        const plan = newPlan();

        plan[0].mapsData = mockLocation(123, 321);
        plan[1].mapsData = mockLocation(456, 789);

        const waypoints = getWayPoints(plan);
        expect(waypoints).toEqual([
            { lat: 123, lng: 321 },
            { lat: 456, lng: 789 },
        ]);
    });
});
