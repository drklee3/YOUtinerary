import Cache from "../src/cache";

describe("cache", () => {
    it("should cache function results", () => {
        const cache = new Cache();
        cache.insert("henlo", "im cached");
        expect(cache.get("henlo")).toBe("im cached");
        expect(cache.get("byebye")).toBeUndefined();
    });
});
