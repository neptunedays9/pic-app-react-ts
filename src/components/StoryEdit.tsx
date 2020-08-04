import React, { Component } from "react"
import { FrameEdit } from "./FrameEdit";
import { ImageList } from "./ImageList";
import { FrameList } from "./FrameList";

/*
Component to represent a new story
It will have an edit frame section + list of frames
It may start empty for a new story OR can start with an already stored story
*/
type StoryEditProps = {

};

type StoryState = {
    selectedFrame : number,
    frameCount : number,
    frames : number []
};

export class StoryEdit extends Component<StoryEditProps, StoryState>{

    constructor(props : StoryEditProps) {
        super(props);

        this.state = {
            frameCount : 1,
            selectedFrame : 1,
            frames : [1]
        }
    }

    frameChanged(e : React.MouseEvent<HTMLButtonElement>) {
        console.log('in parent frameChanged')
        this.setState((state) => ({
            selectedFrame: 2,
            frames : state.frames.concat([2])
          }));
    }

    
    frameAdded = (e : React.MouseEvent<HTMLButtonElement>) =>  {
        console.log('in parent frameAdded')
        this.setState((state) => ({
            selectedFrame: 2,
            frames : state.frames.concat([2])
          }));
    }

    render() {
        let editProps = {
            frames : this.state.frames,
            onChangeFrame: this.frameChanged,
            onAddFrame : this.frameAdded
        };
        return <div id="container">
            <ImageList/>
            <FrameEdit/>
            <FrameList {...editProps} />
            </div>
    }
}