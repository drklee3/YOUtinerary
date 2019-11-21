import { searchLocation, searchRoute } from "./search";
import { FindPlaceRequest, DirectionsRequest } from "@google/maps";

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
        };

        const res = await searchLocation(request);
        const { json } = res;

        expect(json.status).toBe("OK");
        expect(json.candidates.length).toBe(2);

        const sfLocation = json.candidates.find((item) =>
            item.formatted_address!.includes("Fell St")
        );
        expect(sfLocation!.formatted_address).toBe(
            "488 Fell St, San Francisco, CA 94102, United States"
        );

        console.log(JSON.stringify(res.json, null, 4));
    });

    it("should search routes", async () => {
        const request: DirectionsRequest = {
            origin: "urban ritual",
            destination: "u dessert story",
        };

        const res = await searchRoute(request);
        const { json } = res;

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

        expect(json.geocoded_waypoints).toBe(expectedWaypoints);
        console.log(JSON.stringify(res.json, null, 4));
    });
});
