import Event from "./event";

export default class Plan {
    private _name: string;
    private _events: Event[] = [];

    constructor(name: string) {
        this._name = name;
    }

    /**
     * Gets the name of the plan
     */
    get name(): string {
        return this._name;
    }

    /**
     * Sets the name of the plan
     */
    set name(name: string) {
        this._name = name;
    }

    /**
     * Gets number of events in plan
     */
    get length(): number {
        return this._events.length;
    }

    /**
     * Gets all the events in a plan
     */
    get allEvents(): Event[] {
        return this._events;
    }

    /**
     * Adds a single event, returns true if successful
     */
    public addEvent(event: Event): boolean {
        // TODO(Eric): Complete addEvent
        this._events.push(event);
        return true;
    }

    /**
     * Gets a single event
     */
    public getEvent(id: number): Event {
        // TODO(Eric): Complete
        for (const item in this._events) {
            if (this._events[item].id == id) {
                return this._events[item];
            }
        }
        throw new Error("Event cannot be Found");
    }

    /**
     * Removes a single event
     */
    public removeEvent(id: number) {
        // TODO(Eric): Complete removeEvent
        for (const item in this._events) {
            if (this._events[item].id == id) {
                delete this._events[item];
            }
        }
    }

    /**
     * Updates an existing event with modified values
     */
    public editEvent(id: number, newEvent: Event) {
        // TODO(Eric): Complete
        for (const item in this._events) {
            if (this._events[item].id == id) {
                this._events[item] = newEvent;
            }
        }
    }
}
