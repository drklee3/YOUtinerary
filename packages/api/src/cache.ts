import crypto from "crypto";

const MS_IN_1_DAY = 1000 * 60 * 60 * 24;

interface CachedObject {
    key: string;
    value: any;
    created: number;
    ttl: number;
}

export default class Cache {
    private cache: Map<string, CachedObject>;

    constructor() {
        this.cache = new Map();
    }

    private hash(input: string): string {
        return crypto
            .createHash("md5")
            .update(input)
            .digest("hex");
    }

    public insert(input: string, value: any): void {
        const key = this.hash(input);

        const now = new Date().getTime();
        this.cache.set(key, { key, value, created: now, ttl: MS_IN_1_DAY });
    }

    public get(input: string): any | undefined {
        const key = this.hash(input);

        const cached = this.cache.get(key);
        const now = new Date().getTime();

        if (!!cached && cached.created < now + cached.ttl) {
            // Update cache with current time
            this.cache.set(key, { ...cached, created: now });

            return cached.value;
        }

        return;
    }
}
