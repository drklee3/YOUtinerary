import { DirectionsRequest, FindPlaceRequest } from "@google/maps";
import { searchLocation, searchRoute } from "./search";

describe("search", () => {
    it("should search locations", async () => {
        const request: FindPlaceRequest = {
            input: "urban ritual",
            inputtype: "textquery",
            language: "en",
            fields: [
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
            ],
            locationbias: "point:37.7757044,-122.4345857",
        };

        const json = await searchLocation(request);

        console.log(JSON.stringify(json, null, 4));

        expect(json.status).toBe("OK");
        // with locationbias, this will only return the sf location.
        expect(json.candidates.length).toBe(1);
        expect(json.candidates[0].name).toBe("Urban Ritual Cafe");
        expect(json.candidates[0].formatted_address).toBe(
            "488 Fell St, San Francisco, CA 94102, United States"
        );
    });

    it("should search routes", async () => {
        const request: DirectionsRequest = {
            origin: "urban ritual",
            destination: "u dessert story",
        };

        const json = await searchRoute(request);

        /* eslint-disable @typescript-eslint/camelcase */
        const expectedWaypoints = [
            {
                geocoder_status: "OK",
                place_id: "ChIJX7KNJy1-j4ARfn1gMtb2ryM",
                types: ["cafe", "establishment", "food", "point_of_interest"],
            },
            {
                geocoder_status: "OK",
                place_id: "ChIJIR89Dxx-j4AR_LHZbAGY5Wo",
                types: ["establishment", "food", "point_of_interest"],
            },
        ];
        /* eslint-enable */

        expect(json.geocoded_waypoints).toEqual(expectedWaypoints);
        console.log(JSON.stringify(json, null, 4));
    });
});
