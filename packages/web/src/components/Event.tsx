import { FindPlaceFromTextResponse, PlaceSearchResult } from "@google/maps";
import {
    Avatar,
    Button,
    Card,
    Col,
    Icon,
    Input,
    List,
    Modal,
    Row,
    TimePicker,
    Tooltip,
    Typography,
} from "antd";
import moment, { Moment } from "moment";
import React from "react";
import { searchLocation } from "../itinerary/api";
import EventData from "../itinerary/EventData";
import Location from "./Location";

const { Paragraph, Text, Title } = Typography;
const { Search } = Input;

const buildLocationResultsList = (
    onSelectLocation: (placeId: string) => void,
    results?: Array<Partial<PlaceSearchResult>>
): JSX.Element => (
    <List
        itemLayout="horizontal"
        dataSource={results}
        renderItem={(item) => {
            return (
                <List.Item
                    actions={[
                        <Button
                            key="select"
                            type="primary"
                            onClick={() => onSelectLocation(item.place_id!)}
                        >
                            Select
                        </Button>,
                    ]}
                >
                    <List.Item.Meta
                        avatar={
                            <Avatar
                                shape="square"
                                size="large"
                                src={item.icon}
                            />
                        }
                        description={<Location mapsData={item} />}
                    />
                </List.Item>
            );
        }}
    />
);

interface State {
    locationValue: string;
    locationResults?: FindPlaceFromTextResponse;
    modalVisible: boolean;
    searching: boolean;
    searchErrored: boolean;
}

interface Props {
    event: EventData;
    onChangeName: (id: number, name: string) => void;
    onChangeDescription: (id: number, description: string) => void;
    onChangeStart: (id: number, start: Date) => void;
    onChangeEnd: (id: number, end: Date) => void;
    onChangeUserLocation: (id: number, userLocation: string) => void;
    onChangeMapsData: (
        id: number,
        mapsData?: Partial<PlaceSearchResult>
    ) => void;
    onRemove: (id: number) => void;
}

class Event extends React.Component<Props, State> {
    state: State = {
        locationValue: "",
        modalVisible: false,
        searching: false,
        searchErrored: false,
    };

    onChangeName = (name: string): void => {
        this.props.onChangeName(this.props.event.id, name);
    };

    onChangeDescription = (description: string): void => {
        this.props.onChangeDescription(this.props.event.id, description);
    };

    onChangeStart = (time: Moment): void => {
        this.props.onChangeStart(this.props.event.id, time.toDate());
    };

    onChangeEnd = (time: Moment): void => {
        this.props.onChangeEnd(this.props.event.id, time.toDate());
    };

    onChangeUserLocation = (): void => {
        this.props.onChangeUserLocation(
            this.props.event.id,
            this.state.locationValue
        );

        this.hideLocationModal();
    };

    onChangeMapsData = (mapsData: Partial<PlaceSearchResult>): void => {
        this.props.onChangeMapsData(this.props.event.id, mapsData);
    };

    onRemove = (): void => {
        this.props.onRemove(this.props.event.id);
    };

    // location functions
    onChangeLocation = (search: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ locationValue: search.target.value });
    };

    onSelectLocation = (placeId: string): void => {
        const selectedLocation = this.state.locationResults?.candidates.find(
            (loc) => loc.place_id === placeId
        );

        if (!selectedLocation) {
            console.error("Failed to find selected location:", placeId);
            return;
        }

        this.onChangeMapsData(selectedLocation);
        this.hideLocationModal();
    };

    onSearchLocation = async (): Promise<void> => {
        if (!this.state.locationValue) {
            return;
        }

        this.setState({ searching: true, searchErrored: false });

        const res = await searchLocation({
            input: this.state.locationValue,
            inputtype: "textquery",
        });

        this.setState({
            searching: false,
            searchErrored:
                res &&
                res.status &&
                !["OK", "ZERO_RESULTS"].includes(res.status),
            locationResults: res,
        });

        console.log(res);
    };

    // modal functions
    showLocationModal = (): void => {
        this.setState({ modalVisible: true });
    };

    hideLocationModal = (): void => {
        this.setState({ modalVisible: false });
    };

    render(): JSX.Element {
        const {
            name,
            description = "Add a description",
            start,
            end,
            userLocation,
            mapsData,
        } = this.props.event;

        const {
            locationValue,
            locationResults,
            searching,
            searchErrored,
        } = this.state;
        const locationCandidates = locationResults?.candidates;

        return (
            <div style={{ padding: "10px" }}>
                <Card
                    type={"inner"}
                    style={{
                        width: "100%",
                    }}
                >
                    <Row type={"flex"}>
                        <Col
                            md={{ span: 6, order: 1 }}
                            sm={{ span: 6, order: 1 }}
                            xs={{ span: 24, order: 2 }}
                        >
                            <Text strong>Start Time</Text>
                            <br />
                            <TimePicker
                                onChange={this.onChangeStart}
                                value={moment(start)}
                                minuteStep={15}
                                use12Hours={true}
                                allowClear={false}
                                format={"h:mm a"}
                                suffixIcon={<></>}
                                style={{ marginBottom: "24px" }}
                            />
                            <br />
                            <Text strong>End Time</Text>
                            <br />
                            <TimePicker
                                onChange={this.onChangeEnd}
                                value={moment(end)}
                                minuteStep={15}
                                use12Hours={true}
                                allowClear={false}
                                format={"h:mm a"}
                                suffixIcon={<></>}
                            />
                        </Col>
                        <Col
                            md={{ span: 17, offset: 1, order: 2 }}
                            sm={{ span: 17, offset: 1, order: 2 }}
                            xs={{ span: 24, order: 1 }}
                        >
                            <Title
                                level={4}
                                editable={{ onChange: this.onChangeName }}
                            >
                                {name}
                            </Title>
                            <Tooltip title="Delete this event">
                                <Icon
                                    type="close-circle"
                                    theme="twoTone"
                                    style={{
                                        position: "absolute",
                                        right: 0,
                                        top: 0,
                                    }}
                                    onClick={this.onRemove}
                                />
                            </Tooltip>
                            <Paragraph>
                                <Icon
                                    type="environment"
                                    theme="twoTone"
                                    twoToneColor="#f04134"
                                />{" "}
                                {mapsData !== undefined ||
                                userLocation !== undefined ? (
                                    <Location
                                        userLocation={userLocation}
                                        mapsData={mapsData}
                                        showLocationModal={
                                            this.showLocationModal
                                        }
                                    />
                                ) : (
                                    <a onClick={this.showLocationModal}>
                                        Add a location
                                    </a>
                                )}
                                <Modal
                                    title="Search for a location"
                                    centered
                                    visible={this.state.modalVisible}
                                    onOk={this.hideLocationModal}
                                    onCancel={this.hideLocationModal}
                                    footer={[
                                        <Button
                                            key="cancel"
                                            onClick={this.hideLocationModal}
                                        >
                                            Cancel
                                        </Button>,
                                    ]}
                                >
                                    <Search
                                        value={locationValue}
                                        onChange={this.onChangeLocation}
                                        onSearch={this.onSearchLocation}
                                        onPressEnter={this.onSearchLocation}
                                        placeholder="Location"
                                        enterButton
                                        loading={searching}
                                    />
                                    {!searchErrored &&
                                        !searching &&
                                        locationCandidates &&
                                        locationCandidates.length === 0 && (
                                            <Card
                                                style={{
                                                    marginTop: "12px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <Text>
                                                    No location data found!
                                                    <br />
                                                    <Button
                                                        onClick={
                                                            this
                                                                .onChangeUserLocation
                                                        }
                                                        style={{
                                                            marginTop: "10px",
                                                        }}
                                                    >
                                                        Use as custom location
                                                    </Button>
                                                </Text>
                                            </Card>
                                        )}
                                    {searchErrored ? (
                                        <Card style={{ marginTop: "12px" }}>
                                            <p>
                                                {
                                                    "Failed to search :( try again?"
                                                }
                                            </p>
                                        </Card>
                                    ) : (
                                        buildLocationResultsList(
                                            this.onSelectLocation,
                                            locationCandidates
                                        )
                                    )}
                                </Modal>
                            </Paragraph>
                            <Paragraph>
                                <Icon type="profile" theme="twoTone" />
                                <Text
                                    editable={{
                                        onChange: this.onChangeDescription,
                                    }}
                                >
                                    {" " + description}
                                </Text>
                            </Paragraph>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default Event;
