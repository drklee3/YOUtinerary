import EventData from "./EventData";
import {
    addEvent,
    editEvent,
    editEventName,
    editEventStart,
    findEvent,
    removeEvent,
} from "./PlanHelpers";

export function newPlan(): EventData[] {
    let plan = addEvent([]);
    plan = addEvent(plan);
    plan = addEvent(plan);
    return plan;
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

        editEventName(plan, 1, "my name was changed");

        expect(plan[1].name).toBe("my name was changed");
    });

    it("should correctly edit event start", () => {
        const plan = newPlan();

        const start = new Date(123456789);
        editEventStart(plan, 1, start);

        expect(plan[1].start).toBe(start);
    });

    it("should correctly edit event end", () => {
        const plan = newPlan();

        const end = new Date(987654321);
        editEventStart(plan, 1, end);

        expect(plan[1].start).toBe(end);
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
});
