import React, { Component } from "react"

/*
Component to represent a frame in wdit mode
*/
type FrameProps = {

};

export class Frame extends Component<FrameProps>{

    constructor(props : FrameProps) {
        super(props);
    }

    render() {
        return (<div className="test"></div>);
    }
}
