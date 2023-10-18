import React, { Component } from "react";
import * as eva from "eva-icons";
import Navigation from "./navigation/Navigation";
import Sidebar from "./sidebar/index";
import Chat from "./chat";
import Loader from "../Partials/Loader"
import LocationService from "../Services/LocationService";
import PeerService from "../Services/PeerService";

export default class Main extends Component {
    constructor() {
        super();
        this.locationService = new LocationService();
        this.messageService = new PeerService();
        this.state = {
            isLoading: false,
        };
    }
    componentDidMount() {
        eva.replace();
    }
    getMainRender() {
        return (
            <React.Fragment>
                <Navigation />
                <Sidebar />
                <Chat />
            </React.Fragment>
        );
    }
    render() {
        const renderItems = this.state.isLoading ? <Loader /> : this.getMainRender();
        return (
            <div className="layout">
                {renderItems}
            </div>
        )
    }
}