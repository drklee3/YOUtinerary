export interface SearchResult {
    address: string;
    // TODO(Zack): Figure out what fields are required, if there are available
    // types existing we can use.
}

export interface Route {
    // TODO(Slater): Define what route data consists of
}

export function searchLocation(query: string): SearchResult | undefined {
    // TODO(Zack): Search for business, location, etc via Google Maps Places API
    // https://developers.google.com/places/web-service/intro

    return; // SearchResult
}

export function searchRoute(query: string): Route | undefined {
    // TODO(Slater): Search for routes between given locations via Google Maps Routes API
    // https://developers.google.com/maps/documentation/
    return;
}
