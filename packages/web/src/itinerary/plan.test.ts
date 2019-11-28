import Event from "./EventData";
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

    it("should get single event", () => {
        const plan = new Plan("getter");
        const event = new Event(1, "event name", yesterday, now);
        const event2 = new Event(2, "wee", yesterday, now);
        const event3 = new Event(3, "woo", yesterday, now);

        plan.addEvent(event);
        plan.addEvent(event2);
        plan.addEvent(event3);

        const result = plan.getEvent(1);
        expect(result).toBe(event);
    });

    it("should remove the event", () => {
        const plan = new Plan("remover");
        const event = new Event(1, "event name", yesterday, now);
        const event2 = new Event(2, "wee", yesterday, now);
        const event3 = new Event(3, "woo", yesterday, now);

        plan.addEvent(event);
        plan.addEvent(event2);
        plan.addEvent(event3);

        plan.removeEvent(2);
        expect(plan.length).toBe(2);
    });

    it("should reject events with same events", () => {
        const plan = new Plan("test plan");
        const event1 = new Event(1, "event 1", yesterday, now);
        const event2 = new Event(1, "event 2", yesterday, now);

        plan.addEvent(event1);
        const result = plan.addEvent(event2);
        expect(result).toBe(false);
    });
});
