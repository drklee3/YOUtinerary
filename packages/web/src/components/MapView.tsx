import GoogleMapReact from "google-map-react";
import React from "react";
import EventData from "../itinerary/EventData";

const defaultMapOptions = {
    center: {
        lat: 37.349258,
        lng: -121.941026,
    },
    zoom: 12,
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
            locations++;
            return;
        }

        bounds.extend(
            new maps.LatLng(
                event.mapsData.geometry.location.lat,
                event.mapsData.geometry.location.lng
            )
        );
    });

    // fallback to current default bounds
    if (locations === 0) {
        // (bounds | null | undefined) || undefined
        // can't return null so just undefined if null
        return map.getBounds() || undefined;
    }

    return bounds;
};

const bindResizeListener = (
    map: google.maps.Map,
    maps: typeof google.maps,
    bounds?: google.maps.LatLngBounds
): void => {
    maps.event.addDomListenerOnce(map, "idle", () => {
        maps.event.addDomListener(window, "resize", () => {
            if (bounds) {
                map.fitBounds(bounds);
            }
        });
    });
};

const handleApiLoaded = (
    map: google.maps.Map,
    maps: typeof google.maps,
    events: EventData[]
): void => {
    const bounds = getMapBounds(map, maps, events);

    if (bounds) {
        map.fitBounds(bounds);
    }
    bindResizeListener(map, maps, bounds);
};

interface MapViewProps {
    events: EventData[];
}

class MapView extends React.Component<MapViewProps> {
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

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "100%", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.GATSBY_GOOGLE_API_KEY,
                    }}
                    defaultCenter={defaultMapOptions.center}
                    defaultZoom={defaultMapOptions.zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({ map, maps }) =>
                        handleApiLoaded(map, maps, eventsWithLocation)
                    }
                >
                    {eventsWithLocation.map((event) => (
                        <div key={event.id}></div>
                    ))}
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapView;
