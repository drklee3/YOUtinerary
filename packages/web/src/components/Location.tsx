import { PlaceSearchResult } from "@google/maps";
import { Icon, Tooltip, Typography } from "antd";
import React from "react";

const { Text } = Typography;

interface Props {
    userLocation?: string;
    mapsData?: Partial<PlaceSearchResult>;
    showLocationModal?: () => void;
}

const editLocationButton = (
    showLocationModal?: Props["showLocationModal"]
): JSX.Element | undefined => {
    if (!showLocationModal) {
        return;
    }

    return (
        <Tooltip title="Edit Location">
            <Icon type="edit" onClick={showLocationModal} />
        </Tooltip>
    );
};
export class Location extends React.Component<Props> {
    render(): JSX.Element {
        const { userLocation, mapsData, showLocationModal } = this.props;

        // big mess ahead sorry
        if (
            mapsData === undefined &&
            userLocation === undefined &&
            showLocationModal === undefined
        ) {
            return <></>;
        }

        // neither user location nor maps
        if (mapsData === undefined && userLocation === undefined) {
            return <a onClick={showLocationModal}>Add a location</a>;
        }

        // only user location
        if (mapsData === undefined && userLocation !== undefined) {
            return (
                <Text>
                    {userLocation} {editLocationButton(showLocationModal)}
                </Text>
            );
        }

        if (mapsData !== undefined) {
            let ratingElement;
            if (mapsData.rating !== undefined) {
                const numStars = Math.floor(mapsData.rating);
                // ex: 3 stars = [1, 1, 1, 0, 0]
                const stars = Array(5)
                    .fill(false)
                    .fill(true, 0, numStars);
                ratingElement = stars.map((e, i) => (
                    <Icon
                        key={i}
                        type="star"
                        theme={e ? "twoTone" : "outlined"}
                        twoToneColor={e ? "#ffbf00" : undefined}
                    />
                ));
            }

            const priceLevel = mapsData.price_level || 0;

            return (
                <>
                    <Text strong>
                        {mapsData.name} {editLocationButton(showLocationModal)}
                    </Text>
                    <br />
                    <Text>{mapsData.formatted_address}</Text>
                    <br />
                    <Text>
                        {mapsData.rating !== undefined && (
                            <>
                                {mapsData.rating} {ratingElement}
                            </>
                        )}
                        {priceLevel > 0 &&
                            ` • ${"$".repeat(mapsData.price_level || 0)}`}
                    </Text>
                </>
            );
        }

        return <></>;
    }
}

export default Location;
