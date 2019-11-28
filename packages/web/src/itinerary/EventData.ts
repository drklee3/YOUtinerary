import { PlaceSearchResult } from "@google/maps";

export interface EventDataInterface {
    id: number;
    name: string;
    description?: string;
    start: Date;
    end: Date;
    userLocation?: string;
    mapsData?: Partial<PlaceSearchResult>;
}

export class EventData implements EventDataInterface {
    private _id: number;
    private _name: string;
    private _description?: string;
    private _start: Date;
    private _end: Date;
    private _userLocation?: string;
    private _mapsData?: Partial<PlaceSearchResult>;

    constructor(
        id: number,
        name: string,
        start: Date,
        end: Date,
        description?: string,
        userLocation?: string,
        mapsData?: Partial<PlaceSearchResult>
    ) {
        // default data
        this._id = id;
        this._name = name;

        // Maintain earliest date as start
        const flipped = start.getTime() > end.getTime();

        this._start = flipped ? end : start;
        this._end = flipped ? start : end;

        this._description = description;
        this._userLocation = userLocation;
        this._mapsData = mapsData;
    }

    public toJSON(): EventDataInterface {
        return {
            id: this._id,
            name: this._name,
            description: this._description,
            start: this._start,
            end: this._end,
            userLocation: this._userLocation,
            mapsData: this._mapsData,
        };
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

    get description(): string | undefined {
        return this._description;
    }

    set description(description: string | undefined) {
        this._description = description;
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

    get duration(): number {
        // duration in ms
        return this._end.getTime() - this._start.getTime();
    }

    get userLocation(): EventDataInterface["userLocation"] {
        return this._userLocation;
    }

    set userLocation(userLocation: EventDataInterface["userLocation"]) {
        this._userLocation = userLocation;
    }

    get mapsData(): EventDataInterface["mapsData"] {
        return this._mapsData;
    }

    set mapsData(data: EventDataInterface["mapsData"]) {
        this._mapsData = data;
    }
}

export default EventData;
