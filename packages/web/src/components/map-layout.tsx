import GoogleMapReact from "google-map-react";
import React from "react";
const markers = [];
let labelIndex = 1;
const deleteMarker = (marker, markers) => {
    markers.splice(markers.indexOf(marker), 1);
    marker.setMap(null);
    marker = null;
    markers.forEach((temp) => {
        temp.setLabel(String(markers.indexOf(temp) + 1));
    });
    labelIndex = markers.length + 1;
};
const addMarker = (location, map, maps) => {
    const marker = new maps.Marker({
        position: location,
        map: map,
        title: "test",
        label: String(labelIndex),
    });
    maps.event.addListener(marker, "rightclick", function() {
        deleteMarker(this, markers);
    });
    markers.push(marker);
};

/*const resetBounds = (map, maps) => {
    //Create new bounds object
    const bounds = new maps.LatLngBounds();
    //Loop through an array of points, add them to bounds
    for (let i = 0; i < data.length; i++) {
        const geoCode = new maps.LatLng(data[i][1], data[i][2]);
        bounds.extend(geoCode);
    }
    //Add new bounds object to map
    map.fitBounds(bounds);
};*/
const handleApiLoaded = (map, maps) => {
    // for each item in the plan list, make a marker with its location and name
    // use map and maps objects;
    /* plan.forEach(event){
        addMarker(event.location, map, maps);
    }*/
    markers.forEach((marker) => {
        marker.setMap(map);
    });
    maps.event.addListener(map, "click", function(event) {
        addMarker(event.latLng, map, maps);
        labelIndex++;
    });
};

class SimpleMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 36.77,
            lng: -119.41,
        },
        zoom: 8,
    };

    render() {
        if (process.env.GATSBY_GOOGLE_API_KEY === undefined) {
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
