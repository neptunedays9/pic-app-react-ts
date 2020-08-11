import React, { Component } from "react"
import { FrameEdit } from "./FrameEdit";
import { ImageList } from "./ImageList";
import { FrameList } from "./FrameList";
import { Frame } from "./Frame";
// import clonedeep from 'lodash'
/*
Component to represent a new story
It will have an edit frame section + list of frames
It may start empty for a new story OR can start with an already stored story
*/
type StoryEditProps = {

};

type StoryState = {
    selectedFrame : number,
    frames : Array<Frame>,
}

export class StoryEdit extends Component<StoryEditProps, StoryState>{

    constructor(props : StoryEditProps) {
        super(props);

        // @ts-ignore
        const newFrame : Frame = { 
            frameId : 1,
            images : Array()
        };

        const array : Array<Frame> = [ newFrame];

        this.state = {
            selectedFrame : 0,
            frames : Array(newFrame),
        }
    }

    changeframe(e : React.MouseEvent<HTMLButtonElement>) {
        
        this.setState((state) => ({
            selectedFrame: 2,
            frames : state.frames.concat()
          }));
    }

    
    addFrame = (e : React.MouseEvent<HTMLButtonElement>) =>  {
       let newFrameIndex = this.state.selectedFrame + 1;
       const newFrame : Frame = { 
            frameId : 1,
            images : Array()
        };

        let frames = [...this.state.frames];
 
        frames.push(newFrame);
        
        this.setState({frames});

        this.setState((state) => ({
            selectedFrame: newFrameIndex,
          }));
    }

    dragImage = (src : string, x : number, y : number) => {
        
        // 1. Make a shallow copy of the items
        let frames = [...this.state.frames];
        // 2. Make a shallow copy of the item you want to mutate
        let item = {...frames[this.state.selectedFrame]};
        // 3. Replace the property you're intested in

        if(item.images) {
            item.images.push({
                src : src,
                height : 20,
                width : 20,
            
                x : x,
                y : y
            });
        }
        else {
            item.images = [{
                src : src,
                height : 20,
                width : 20,
            
                x : x,
                y : y
            }]
        }
    
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        frames[this.state.selectedFrame] = item;
        // 5. Set the state to our new copy
        this.setState({frames});
    }

    render() {
        let frameListProps = {
            frames : this.state.frames,
            onChangeFrame: this.changeframe,
            onAddFrame : this.addFrame
        };

        let imageListProps = {
            onDragImage : this.dragImage
        };
        
        let frameEditProps = {
            images : this.state.frames[this.state.selectedFrame].images
        };
       
        return <div id="container">
            <ImageList {...imageListProps} />
            <FrameEdit {...frameEditProps}/>
            <FrameList {...frameListProps} />
            </div>
    }
}