import {
    DirectionsRequest,
    DirectionsResponse,
    FindPlaceFromTextResponse,
    FindPlaceRequest,
} from "@google/maps";
import axios from "axios";

const API_BASE_URL = process.env.dev
    ? "http://127.0.0.1:3000"
    : "PROD_URL_HERE";

const API_LOCATIONS_ENDPOINT = API_BASE_URL + "/locations";
const API_ROUTES_ENDPOINT = API_BASE_URL + "/routes";

export async function searchLocation(
    request: FindPlaceRequest
): Promise<FindPlaceFromTextResponse> {
    const res = await axios.post(API_LOCATIONS_ENDPOINT, request);
    return res.data;
}

export async function searchRoute(
    request: DirectionsRequest
): Promise<DirectionsResponse> {
    const res = await axios.post(API_ROUTES_ENDPOINT, request);
    return res.data;
}
