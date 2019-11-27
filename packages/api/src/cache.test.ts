import Cache from "../src/cache";

let count = 0;
const fn = (): number => ++count;

describe("cache", () => {
    it("should cache function results", () => {
        const cache = new Cache(fn);
        expect(cache.call("henlo")).toBe(1);
        expect(cache.call("henlo")).toBe(1);
        expect(cache.call("goodby")).toBe(2);
    });
});
