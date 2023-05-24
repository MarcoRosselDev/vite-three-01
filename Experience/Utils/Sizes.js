export default class Sizes{
    constructor(){
        this.width = window.innerWidth; // <--- estas 3 estan en la documentacion de parametros de three
        this.height = window.innerHeight;
        this.aspect = this.width/this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2) // <--- documentation

        window.addEventListener('resize', () => { // <--- escuchar el tamagnio de la ventana
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.aspect = this.width/this.height;
        })
    }
}