import { FrameImage } from './FrameImage'

export class Frame {
    frameId! : number;
    images! : Array<FrameImage>

    constructor() {
        this.frameId = 0,
        this.images = Array();
    }
}