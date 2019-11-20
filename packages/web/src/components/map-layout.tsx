import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { string } from "prop-types";
//import Plan

const markers = [];
let labelIndex = 1;
const deleteMarker = (marker, markers) => {
    marker.setMap(null);
    marker = null;
};
const addMarker = (location, map, maps) => {
    const marker = new maps.Marker({
        position: location,
        map: map,
        title: "test",
        label: String(labelIndex++),
    });
    maps.event.addListener(marker, "rightclick", function() {
        deleteMarker(this, markers);
    });
    markers.push(marker);
};

const resetBounds = (map, maps) => {
    //Create new bounds object
    const bounds = new maps.LatLngBounds();
    //Loop through an array of points, add them to bounds
    for (let i = 0; i < data.length; i++) {
        let geoCode = new maps.LatLng(data[i][1], data[i][2]);
        bounds.extend(geoCode);
    }
    //Add new bounds object to map
    map.fitBounds(bounds);
};
const handleApiLoaded = (map, maps) => {
    // for each item in the plan list, make a marker with its location and name
    // use map and maps objects;
    /* plan.forEach(event){
        addMarker(event.location, map, maps);
    }*/
    addMarker({ lat: 36, lng: -119 }, map, maps);
    addMarker({ lat: 36, lng: -118 }, map, maps);
    maps.event.addListener(map, "click", function(event) {
        addMarker(event.latLng, map, maps);
    });
};

/*const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
        bounds.extend(
            new maps.LatLng(
                place.geometry.location.lat,
                place.geometry.location.lng
            )
        );
    });
    return bounds;
};*/
class SimpleMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 36.77,
            lng: -119.41,
        },
        zoom: 8,
    };

    render() {
        if (process.env.GATSBY_GOOGLE_API_KEY == undefined) {
            return <div>Invalid Key</div>;
        }
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.GATSBY_GOOGLE_API_KEY,
                    }}
                    defaultCenter={SimpleMap.defaultProps.center}
                    defaultZoom={SimpleMap.defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({ map, maps }) =>
                        handleApiLoaded(map, maps)
                    }
                ></GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
