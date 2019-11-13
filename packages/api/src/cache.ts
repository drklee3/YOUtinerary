const MS_IN_1_DAY = 1000 * 60 * 60 * 24;

type Fun = any;

interface CachedObject {
    key: string;
    value: any;
    accessed: number;
    ttl: number;
}

export default class Cache<T> {
    private cache: Map<string, CachedObject>;
    private fn: Fun;

    constructor(fn: Fun) {
        this.fn = fn;
        this.cache = new Map();
    }

    public call(key: string, ...args: T[]): any {
        const cached = this.cache.get(key);
        const now = new Date().getTime();

        if (!!cached && cached.accessed < now + cached.ttl) {
            // Update cache with current time
            this.cache.set(key, { ...cached, accessed: now });

            return cached.value;
        }

        // Not in cache or exceeded ttl
        const value = this.fn(args);
        this.cache.set(key, { key, value, accessed: now, ttl: MS_IN_1_DAY });

        return value;
    }
}
