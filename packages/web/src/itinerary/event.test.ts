import Event from "./event";

describe("event", () => {
    const now = new Date();
    const yesterday = new Date(now.getDate() - 1);

    it("should flip reversed dates", () => {
        const event = new Event("test", now, yesterday);

        expect(event.start.getTime()).toBeLessThan(event.end.getTime());
    });

    it("should keep correct dates", () => {
        const event = new Event("test", yesterday, now);

        expect(event.start.getTime()).toBeLessThan(event.end.getTime());
    });
});
