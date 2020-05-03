//Variables for setup

let container;
let camera;
let renderer;
let scene;
let model;

function init() {
    container = document.querySelector('.scene');
   
    //Create scene

    scene = new THREE.Scene();
    
    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;
    

    //Camera Setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(100, 100, 100);

    //Renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //Load Model
    let loader = new THREE.GLTFLoader();
    loader.load("./xbox_controller/scene.gltf", function(gltf) {
        scene.add(gltf.scene);
        renderer.render(scene, camera);
    });
}

init();