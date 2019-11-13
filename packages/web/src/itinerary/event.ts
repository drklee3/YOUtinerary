export default class Event {
    private _name: string;
    private _start: Date;
    private _end: Date;

    constructor(name: string, start: Date, end: Date) {
        this._name = name;

        // Maintain earliest date as start
        const flipped = start.getTime() > end.getTime();

        this._start = flipped ? end : start;
        this._end = flipped ? start : end;
    }

    get name(): string {
        return this._name;
    }

    get start(): Date {
        return this._start;
    }

    get end(): Date {
        return this._end;
    }

    /**
     * Gets duration of event in milliseconds
     */
    get duration(): number {
        return this._end.getTime() - this._start.getTime();
    }
}
