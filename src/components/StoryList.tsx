import React, { Component } from "react"
import { FrameEdit } from "./FrameEdit";

/*
Component to represent a new story
It will have an edit frame section + list of frames
It may start empty for a new story OR can start with an already stored story
*/
type StoryListProps = {

};

export class StoryList extends Component<StoryListProps>{

    constructor(props : StoryListProps) {
        super(props);
    }

    render() {
        return (<div/>);
    }
}