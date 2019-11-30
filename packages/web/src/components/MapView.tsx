import { DirectionsResponse } from "@google/maps";
import GoogleMapReact from "google-map-react";
import React from "react";
import EventData from "../itinerary/EventData";
import Marker from "./Marker";

const defaultMapOptions = {
    center: {
        lat: 37.349258,
        lng: -121.941026,
    },
    zoom: 13,
};

const getMapBounds = (
    map: google.maps.Map,
    maps: typeof google.maps,
    events: EventData[]
): google.maps.LatLngBounds | undefined => {
    const bounds = new maps.LatLngBounds();
    let locations = 0;

    events.forEach((event) => {
        if (!event.mapsData || !event.mapsData.geometry) {
            return;
        }

        locations++;
        bounds.extend(
            new maps.LatLng(
                event.mapsData.geometry.location.lat,
                event.mapsData.geometry.location.lng
            )
        );
    });

    console.log(`Map bounds created with ${locations} locations`);

    if (locations === 1) {
        return;
    }

    // fallback to current default bounds
    if (locations === 0) {
        // (bounds | null | undefined) || undefined
        // can't return null so just undefined if null
        return map.getBounds() || undefined;
    }

    return bounds;
};

interface MapViewProps {
    events: EventData[];
    route?: DirectionsResponse;
}

interface MapViewState {
    map?: google.maps.Map;
    maps?: typeof google.maps;
    polyline?: google.maps.Polyline;
}

class MapView extends React.Component<MapViewProps, MapViewState> {
    state = {
        map: undefined,
        maps: undefined,
        polyline: undefined,
    };

    static getDerivedStateFromProps(
        props: MapViewProps,
        state: MapViewState
    ): MapViewState | null {
        const { route } = props;
        const { map, maps, polyline } = state;

        if (!route || !route.routes || route.routes.length === 0) {
            console.log("No route, not creating polyline");
            return null;
        }

        if (!map || !maps) {
            console.error("map or maps isn't defined");
            return null;
        }

        const decodedPolyline = maps.geometry.encoding.decodePath(
            route.routes[0].overview_polyline.points
        );

        const polylineOptions = {
            path: decodedPolyline,
            strokeColor: "#1890ff",
            map,
        };

        if (polyline === undefined) {
            console.log("Added new polyline for new route:", polyline);
            return {
                polyline: new maps.Polyline(polylineOptions),
            };
        }

        console.log("Updated existing polyline for new route:", polyline);

        polyline.setOptions(polylineOptions);
        polyline.setMap(map);

        return { polyline };
    }

    handleApiLoaded = (
        map: google.maps.Map,
        maps: typeof google.maps,
        events: EventData[]
    ): void => {
        const bounds = getMapBounds(map, maps, events);

        if (bounds) {
            map.fitBounds(bounds);
        }

        // bindResizeListener(map, maps, bounds);
        this.setState({ map, maps });
    };

    bindResizeListener = (
        map: google.maps.Map,
        maps: typeof google.maps
    ): void => {
        maps.event.addDomListenerOnce(map, "idle", () => {
            maps.event.addDomListener(window, "resize", () => {
                const bounds = getMapBounds(map, maps, this.props.events);

                if (bounds) {
                    map.fitBounds(bounds);
                }
            });
        });
    };

    render(): JSX.Element {
        const { events } = this.props;
        const eventsWithLocation = events.filter(
            (event) =>
                event.mapsData !== undefined &&
                event.mapsData.geometry !== undefined
        );

        if (process.env.GATSBY_GOOGLE_API_KEY === undefined) {
            return <div>Invalid Key</div>;
        }

        console.log(eventsWithLocation);

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "100%", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.GATSBY_GOOGLE_API_KEY,
                        libraries: "geometry",
                    }}
                    resetBoundsOnResize={true}
                    defaultCenter={defaultMapOptions.center}
                    defaultZoom={defaultMapOptions.zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({ map, maps }) =>
                        this.handleApiLoaded(map, maps, eventsWithLocation)
                    }
                    hoverDistance={20}
                >
                    {eventsWithLocation.map((event) => (
                        <Marker
                            key={event.id}
                            event={event}
                            lat={event.mapsData?.geometry?.location.lat}
                            lng={event.mapsData?.geometry?.location.lng}
                        />
                    ))}
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapView;
