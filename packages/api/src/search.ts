import Maps, {
    DirectionsRequest,
    DirectionsResponse,
    FindPlaceFromTextResponse,
    FindPlaceRequest,
} from "@google/maps";
import { union } from "lodash";
import Config from "./config";

const MapsClient = Maps.createClient({
    key: Config.GOOGLE_API_KEY,
    Promise: Promise,
});

export async function searchLocation(
    request: FindPlaceRequest
): Promise<FindPlaceFromTextResponse> {
    // add required default request parameters if not provided
    request.fields = union(request.fields, [
        "place_id",
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
    ]);

    if (!request.language) {
        request.language = "en";
    }

    if (!request.inputtype) {
        request.inputtype = "textquery";
    }

    if (!request.locationbias) {
        request.locationbias = "point:37.3492264,-121.9371648";
    }
    const res = await MapsClient.findPlace(request).asPromise();
    return res.json;
}

export async function searchRoute(
    options: DirectionsRequest
): Promise<DirectionsResponse> {
    const res = await MapsClient.directions(options).asPromise();
    return res.json;
}
