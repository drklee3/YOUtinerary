import Maps, {
    FindPlaceRequest,
    FindPlaceFromTextResponse,
    ClientResponse,
} from "@google/maps";
import Config from "./config";

const MapsClient = Maps.createClient({
    key: Config.GOOGLE_API_KEY,
    Promise: Promise,
});

export interface SearchResult {
    address: string;
    // TODO(Zack): Figure out what fields are required, if there are available
    // types existing we can use.
}

export interface Route {
    // TODO(Slater): Define what route data consists of
}

export function searchLocation(
    input: string
): Promise<ClientResponse<FindPlaceFromTextResponse>> {
    // TODO(Zack): Search for business, location, etc via Google Maps Places API
    // https://developers.google.com/places/web-service/intro

    const request: FindPlaceRequest = {
        input,
        inputtype: "textquery",
        language: "en",
        fields: [
            "icon",
            "name",
            "opening_hours",
            "price_level",
            "rating",
            "types",
            "formatted_address",
            "permanently_closed",
        ],
    };

    return MapsClient.findPlace(request).asPromise();
}

export function searchRoute(input: string): Route | undefined {
    // TODO(Slater): Search for routes between given locations via Google Maps Routes API
    // https://developers.google.com/maps/documentation/
    return;
}
