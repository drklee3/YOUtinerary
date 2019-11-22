import Maps, {
    FindPlaceRequest,
    FindPlaceFromTextResponse,
    ClientResponse,
    DirectionsRequest,
    DirectionsResponse,
} from "@google/maps";
import Config from "./config";

const MapsClient = Maps.createClient({
    key: Config.GOOGLE_API_KEY,
    Promise: Promise,
});

export function searchLocation(
    request: FindPlaceRequest
): Promise<ClientResponse<FindPlaceFromTextResponse>> {
    // default request parameters if not provided
    if (!request.fields) {
        request.fields = [
            "formatted_address",
            "geometry",
            "icon",
            "name",
            "opening_hours",
            "permanently_closed",
            "photos",
            "price_level",
            "rating",
            "types",
        ];
    }

    if (!request.language) {
        request.language = "en";
    }

    if (!request.inputtype) {
        request.inputtype = "textquery";
    }

    return MapsClient.findPlace(request).asPromise();
}

export function searchRoute(
    options: DirectionsRequest
): Promise<ClientResponse<DirectionsResponse>> {
    return MapsClient.directions(options).asPromise();
}
