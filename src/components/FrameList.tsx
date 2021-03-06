import React, { Component } from "react"
import { Stage, Layer, Image } from 'react-konva';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Frame } from "./Frame";


/*
Component to represent a frame in wdit mode
*/
type FrameListProps = {
    frames : Array<Frame>,
    onAddFrame : (event: React.MouseEvent<HTMLButtonElement>) => void,
    onChangeFrame : (event: React.MouseEvent<HTMLButtonElement>) => void
};

type FrameState = {

};

const maxFrame = 2;

let posX = 30;

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export class FrameList extends Component<FrameListProps, FrameState>{
    
    frameList : String [] = []

    constructor(props : FrameListProps) {
        super(props);
    }

    changeFrame = (e : React.MouseEvent<HTMLDivElement>) => {
        console.log('in child frameChanged', e)
        // this.props.onChangeFrame(e);
    }

    
    addFrame = (e : React.MouseEvent<HTMLButtonElement>) => {
        console.log('in child frameAdded')
        this.props.onAddFrame(e);
    }

    handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        alert(event); // alerts BUTTON
      }

    render() {

        const mystyle = {
            color: "white",
            // backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            width: window.innerWidth/10,
            height: window.innerHeight/8
          };

        return (
            
            <div id="test">
                {this.props.frames.map(element => {
                    console.log('ADdding')
                                return (
                            <div id="container" style={mystyle} onClick={this.changeFrame}>
                                <Stage
                                    x={posX}
                                    y={50}
                                    width={5}
                                    height={80}
                                    // scaleX= {1 / 4}
                                    // scaleY={1 / 4}
                                    style={{ border: '2px solid red' }}
                                    // ref={stageRef}
                                    >
                                    {/* <Layer
                                        style={{ border: '2px solid black' }}
                                    >
                                        {images.map(image => {
                                        return <URLImageThumbnail image={image} />;
                                        })}
                                    </Layer> */}
                                </Stage>
                                </div>);
                                posX += 40;
                     }
                 
                 )} 

        
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.addFrame}
                    // className={classes.button}
                    startIcon={<AddCircleOutlineIcon />}
                >
                    Add
                </Button>
            </div>
            );
    }
}
