import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { jsxAttribute, jsxElement } from "@babel/types";

class SimpleMap extends React.Component {
    defaultProps = {
        center: {
            lat: 36.77,
            lng: -119.41,
        },
        zoom: 8,
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.GATBSY_GOOGLE_API_KEY,
                    }}
                    defaultCenter={this.defaultProps.center}
                    defaultZoom={this.defaultProps.zoom}
                ></GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
