import Event from "./event";
import Plan from "./plan";

const now = new Date();
const yesterday = new Date(now.getDate() - 1);

describe("plan", () => {
    it("should correctly add events", () => {
        const plan = new Plan("test plan");
        const event = new Event(1, "event name", yesterday, now);

        plan.addEvent(event);

        expect(plan.length).toBe(1);
        expect(plan.allEvents[0]).toEqual(event);
    });

    it("should correctly edit events", () => {
        const plan = new Plan("test plan");
        const event = new Event(1, "event name", yesterday, now);

        plan.addEvent(event);

        const newStart = new Date(yesterday.getTime() + 100);
        event.start = newStart;

        plan.editEvent(1, event);

        expect(plan.allEvents[0]).toEqual(event);
    });

    it("should reject events with same events", () => {
        const plan = new Plan("test plan");
        const event1 = new Event(1, "event 1", yesterday, now);
        const event2 = new Event(1, "event 2", yesterday, now);

        plan.addEvent(event1);
        plan.addEvent(event2);
    });
});
