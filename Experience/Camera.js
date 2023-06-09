import * as THREE from 'three';
import Experience from "./Experience";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControls();
    }
    setOrbitControls(){
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 100);
        this.scene.add(this.perspectiveCamera)
    }

    createOrthographicCamera(){
        this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum)/2,
            (this.sizes.aspect * this.sizes.frustrum)/2,
            this.sizes.frustrum / 2,
            -this.scene.frustrum / 2,
            -100,
            100
        );
        this.scene.add(this.orthographicCamera);
        this.perspectiveCamera.position.z = 4.45;
        this.perspectiveCamera.position.x = 3.67;
        this.perspectiveCamera.position.y = 4.75;
    }

    resize(){
        // updating perspective camera on resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        // updating orthographic camera on resize
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum)/2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum)/2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.scene.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }

    update(){
        this.controls.update()
    }
}