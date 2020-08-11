import React, { Component } from "react"
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
/*
Component to represent a frame in wdit mode
*/
type ImageListProps = {
    onDragImage : (src : string, x : number, y : number) => void
};

// const maxFrame = 2;
// const dragUrl = React.useRef();
// const stageRef = React.useRef();
// const [images, setImages] = React.useState([]);

const URLImage = ( image : any) => {
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

  

export class ImageList extends Component<ImageListProps>{
    // public dragUrl = React.useRef();

    constructor(props : ImageListProps) {
        super(props);
    }

    draggedImage = (e : React.MouseEvent<HTMLImageElement>) => {
        var image = e.target as HTMLImageElement;
        this.props.onDragImage(image.src, image.x, image.y);
    }

    render() {
        return (
        <div>
            <img
                alt="lion"
                src="https://konvajs.org/assets/lion.png"
                draggable="true"
                // onDragStart={e => {
                // dragUrl.current = e.target.src;
                // }}
                onDragStart={this.draggedImage}
            />
            <img
                alt="juice"
                src="https://cdn3.iconfinder.com/data/icons/fruit-and-vegetables-outline/32/Fruits_and_Vegetables_fruit_juice-128.png"
                draggable="true"
                // onDragStart={e => {
                // dragUrl.current = e.target.src;
                // }}
                onDragStart={this.draggedImage}
            />
            <img
                alt="slippers"
                src="https://cdn2.iconfinder.com/data/icons/summer-flat-11/272/summer-vacation-slippers-footwear-flipflops-beach-wear-128.png"
                draggable="true"
                // onDragStart={e => {
                // dragUrl.current = e.target.src;
                // }}
                onDragStart={this.draggedImage}
            />
            <img
                alt="icecream"
                src="https://cdn2.iconfinder.com/data/icons/summer-flat-11/272/summer-vacation-ice-cream-stick-food-popsicle-128.png"
                draggable="true"
                // onDragStart={e => {
                // dragUrl.current = e.target.src;
                // }}
                onDragStart={this.draggedImage}
            />
        </div>)
    }
}