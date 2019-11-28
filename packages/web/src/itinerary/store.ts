import { Data } from "../components/Plan";
import { EventData, EventDataInterface } from "./EventData";

export function saveData(data: Data): void {
    window.localStorage.setItem("data", JSON.stringify(data));
}

export function savePlan(plan: EventData[]): void {
    window.localStorage.setItem("plan", JSON.stringify(plan));
}

export function restoreData(): Data | undefined {
    const rawData = window.localStorage.getItem("data");

    if (!rawData) {
        return;
    }

    try {
        return JSON.parse(rawData);
    } catch (e) {
        return undefined;
    }
}

export function restorePlan(): EventData[] | undefined {
    const rawPlan = window.localStorage.getItem("plan");
    if (!rawPlan) {
        return;
    }

    try {
        const plan = JSON.parse(rawPlan);
        return plan.map(
            (e: EventDataInterface) =>
                new EventData(
                    e.id,
                    e.name,
                    new Date(e.start),
                    new Date(e.end),
                    e.description,
                    e.userLocation,
                    e.mapsData
                )
        );
    } catch (e) {
        return undefined;
    }
}
