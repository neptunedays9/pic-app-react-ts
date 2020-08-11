import React, { Component } from "react"
import { Stage, Layer, Image } from 'react-konva';
import Konva from "konva";
import useImage from 'use-image';
import { FrameImage } from "./FrameImage";

/*
Component to represent a frame in wdit mode
*/
type FrameEditProps = {
  images : FrameImage []
};

type FrameEditState = {
  images : FrameImage []
};

const URLImage = ({ image } : any) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

export class FrameEdit extends Component<FrameEditProps, FrameEditState>{

    constructor(props : FrameEditProps) {
        super(props);

        this.state = {
          images : this.props.images
        };
    }

    render() {
      console.log('IMAGES', this.state.images)
        return (
        <div id="frame">
            <Stage
                width={window.innerWidth}
                height={window.innerHeight -350}
                style={{ border: '1px solid grey' }}
                id="frame"
                // ref={stageRef}
                >
                <Layer>
                    {this.state.images.map(image => {
                    return <URLImage image={image} />;
                    })}
                </Layer>
            </Stage>
        </div>
        );
    }
}

/*


import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import { Container } from 'konva/types/Container';

const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

const URLImageThumbnail = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      width={30}
      height={30}
      image={img}
      x={image.x/10}
      y={image.y/10}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 5 : 0}
      offsetY={img ? img.height / 5 : 0}
    />
  );
};


const App = () => {
  console.log('APP')
  // eslint-disable-next-line 
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);

  return (
    <div>
       Try to trag and image into the stage:
       <br />
      <img
         alt="lion"
         src="https://konvajs.org/assets/lion.png"
         draggable="true"
         onDragStart={e => {
           dragUrl.current = e.target.src;
         }}
       />
       <div
        onDrop={e => {
          // register event position
          stageRef.current.setPointersPositions(e);
          // add image
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: dragUrl.current
              }
            ])
          );
        }}
        onDragOver={e => e.preventDefault()}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight -350}
          style={{ border: '1px solid grey' }}
          ref={stageRef}
        >
          <Layer>
            {images.map(image => {
              return <URLImage image={image} />;
            })}
          </Layer>
        </Stage>
      </div>
      HERE
      <div style={{"font-size" : "10px", "height" : "100px", "width" : "120px", "color":"blue"}}>
      <Stage
          x={30}
          y={50}
          width={window.innerWidth/5}
          height={window.innerHeight/5}
          scaleX= {1 / 2}
          scaleY={1 / 2}
          style={{ border: '2px solid red' }}
          // ref={stageRef}
        >
          <Layer
            style={{ border: '2px solid black' }}
          >
            {images.map(image => {
              return <URLImageThumbnail image={image} />;
            })}
          </Layer>
        </Stage>
        </div>

        <Container style={{"font-size" : "10px", "height" : "100px", "width" : "120px", "color":"blue", "y":"100"}}>
      <Stage
          x={50}
          y={100}
          width={window.innerWidth/5}
          height={window.innerHeight/5}
          scaleX= {1 / 2}
          scaleY={1 / 2}
          style={{ border: '2px solid red' }}
          // ref={stageRef}
        >
          <Layer
            style={{ border: '2px solid black' }}
          >
            {images.map(image => {
              return <URLImageThumbnail image={image} />;
            })}
          </Layer>
        </Stage>
        </Container>
    </div>
  );
};

export default App;

*/