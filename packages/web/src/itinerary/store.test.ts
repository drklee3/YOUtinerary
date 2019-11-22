import { newPlan } from "./PlanHelpers.test";
import { restoreData, restorePlan, saveData, savePlan } from "./store";

describe("store", () => {
    it("should save and retrieve data", () => {
        const data = { title: "hello!" };

        saveData(data);

        // expect(localStorage.store["data"]).toBe(JSON.stringify(data));

        expect(restoreData()).toEqual(data);
    });

    it("should save and retrieve plan", () => {
        const plan = newPlan();

        savePlan(plan);
        console.log(window.localStorage.getItem("plan"));

        expect(restorePlan()).toEqual(plan);
    });
});
