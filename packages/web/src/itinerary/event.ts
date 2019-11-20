export default class Event {
    private _id: number;
    private _name: string;
    private _start: Date;
    private _end: Date;

    constructor(id: number, name: string, start: Date, end: Date) {
        this._id = id;
        this._name = name;

        // Maintain earliest date as start
        const flipped = start.getTime() > end.getTime();

        this._start = flipped ? end : start;
        this._end = flipped ? start : end;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get start(): Date {
        return this._start;
    }

    set start(start: Date) {
        this._start = start;
    }

    get end(): Date {
        return this._end;
    }

    set end(end: Date) {
        this._end = end;
    }

    /**
     * Gets duration of event in milliseconds
     */
    get duration(): number {
        return this._end.getTime() - this._start.getTime();
    }
}
