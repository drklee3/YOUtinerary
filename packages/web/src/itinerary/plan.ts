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
        if (this._events.some((item) => (item.id = event.id))) {
            return false;
        }
        this._events.push(event);
        return true;
    }

    /**
     * Gets a single event
     */
    public getEvent(id: number): Event | undefined {
        const result = this._events.find((item) => item.id === id);
        return result;
    }

    /**
     * Removes a single event
     */
    public removeEvent(id: number) {
        this._events.forEach((item, index) => {
            if (item.id == id) {
                return this._events.splice(index, 1);
            }
        });
    }

    /**
     * Updates an existing event with modified values
     */
    public editEvent(id: number, newEvent: Event) {
        const result = this._events.find((item) => item.id === id);
        Object.assign(result, newEvent);
    }
}
