import * as THREE from 'three';
import Size from './Utils/Sizes.js';
import Camera from './Utils/Camera.js';

export default class Experience{
    static instance;
    constructor(canvas){
        if (Experience.instance) {
            return Experience.instance
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.sizes = new Size();
        this.camera = new Camera();
        console.log(this.camera, this.sizes, this.scene, this.canvas);
    }
}