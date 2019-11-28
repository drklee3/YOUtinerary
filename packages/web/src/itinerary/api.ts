import {
    DirectionsRequest,
    DirectionsResponse,
    FindPlaceFromTextResponse,
    FindPlaceRequest,
} from "@google/maps";
import axios from "axios";

const API_BASE_URL = process.env.GATSBY_DEV
    ? "http://127.0.0.1:3000"
    : "https://youtinerary-api.dlee.dev";

console.log("Using API url:", API_BASE_URL);

const API_LOCATIONS_ENDPOINT = API_BASE_URL + "/locations";
const API_ROUTES_ENDPOINT = API_BASE_URL + "/routes";

export async function searchLocation(
    request: FindPlaceRequest
): Promise<FindPlaceFromTextResponse> {
    const res = await axios.post(API_LOCATIONS_ENDPOINT, request);
    console.log(JSON.stringify(res));
    return res.data;
}

export async function searchRoute(
    request: DirectionsRequest
): Promise<DirectionsResponse> {
    const res = await axios.post(API_ROUTES_ENDPOINT, request);
    return res.data;
}
