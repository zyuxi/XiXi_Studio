
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

/**
 * Loaders
 */
const loadingBarElement = document.querySelector('.loading-bar');
const bodyElement = document.querySelector('body');
const loadingManager = new THREE.LoadingManager(
    () => {
        window.setTimeout(() => {
            gsap.to(overlayMaterial.uniforms.uAlpha, {
                duration: 3,
                value: 0,
                delay: 1
            });
            gsap.to(overlayMaterial.uniforms.uAlpha, {
                duration: 3,
                value: 0,
                delay: 1
            });

            loadingBarElement.classList.add('ended');
            bodyElement.classList.add('loaded');
            loadingBarElement.style.transform = '';

        }, 500)
    },
    (itemUrl, itemsLoaded, itemsTotal) => {
        console.log(itemUrl, itemsLoaded, itemsTotal);
        const progressRatio = itemsLoaded / itemsTotal;
        loadingBarElement.style.transform = `scaleX(${progressRatio})`;
        console.log(progressRatio);
    },
    () => {

    }
);
const gltfLoader = new THREE.GLTFLoader(loadingManager);

/**
 *  Textures
 */
const textureLoader = new THREE.TextureLoader();
const alphaShadow = textureLoader.load('');

// Scene
const scene = new THREE.Scene();

const sphereShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.5, 1.5),
    new THREE.MeshBasicMaterial({
        transparent: true,
        color: 0x000000,
        opacity: 0.5,
        alphaMap: alphaShadow
    })
);

sphereShadow.rotation.x = -Math.PI * 0.5;

sphereShadow.position.y = -1;
sphereShadow.position.x = 1.5;

scene.add(sphereShadow);

/**
 * Overlay
 */
const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
const overlayMaterial = new THREE.ShaderMaterial({
    vertexShader: `
        void main() {
            gl_Position = vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float uAlpha;
        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
            // gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,
    uniforms: {
        uAlpha: {
            value: 1.0
        }
    },
    transparent: true
});
const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial);
scene.add(overlay);


/**
 * GLTF Model
 */
let model = null;

gltfLoader.load(
    '../assets/model/XiXi Studio.gltf',
    (gltf) => {
        console.log(gltf);

        model = gltf.scene;

        const radius = 1;

        model.position.x = 0;
        model.position.y = 0;

        // model.rotation.x = Math.PI * 0.2
        // model.rotation.z = Math.PI * 0.15

        model.scale.set(radius, radius, radius);

        scene.add(model);
    },
    (progress) => {
        console.log(progress);
    },
    (error) => {
        console.error(error);
    }
);

/**
 * Light
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 2, 0);

directionalLight.castShadow = true;
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 1000);
camera.position.set(-0.5, 1.5, 12);

scene.add(camera);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    render.setSize(window.innerWidth, window.innerHeight);
})

/**
 * Scroll
 */
let scrollY = window.scrollY;
let currentSection = 0;

const cameraPosition = [
    {x: -0.5, y: 1.5, z:12, targetX: 0, targetY: 0, targetZ: 0},
    {x: -1.8, y: 0.8, z: 2.5, targetX: 0, targetY: 0, targetZ: 0},
    {x: 1.7, y: 1.2, z: 2.5, targetX: 0, targetY: 0, targetZ: 0},
    // {x: 0, y: 0, z: 0, targetX: 0, targetY: 0, targetZ: 0},
    {x: -2.8, y: 0.8, z: 2.4, targetX: 0, targetY: 0, targetZ: 0},
    {x: -2.8, y: 0.2, z: 5, targetX: 0, targetY: 0, targetZ: 0},
    {x: 1.4, y: 1, z: 5.8, targetX: 0, targetY: 0, targetZ: 0},
];

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    const newSection = Math.round(scrollY / sizes.height);

    if(!!camera) {
        currentSection = newSection;

        gsap.to(
            camera.position, {
                duration: 1.5,
                ease: 'power2.inOut',
                x: cameraPosition[currentSection].x,
                y: cameraPosition[currentSection].y,
                z: cameraPosition[currentSection].z,
            }
        );
        gsap.to(
            camera.target, {
                duration: 1.5,
                ease: 'power2.inOut',
                x: cameraPosition[currentSection].targetX,
                y: cameraPosition[currentSection].targetY,
                z: cameraPosition[currentSection].targetZ,
            }
        );        
    }
});

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();
let lastElapsedTime = 0;

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - lastElapsedTime;
    lastElapsedTime = elapsedTime;

    if (!!model) {
        model.position.y = Math.sin(elapsedTime * .5) * .1 - 0.1;
        sphereShadow.material.opacity = (1 - Math.abs(model.position.y)) * 0.3;
    }

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();

/**
 * On Reload
 */
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// NavBar
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetID = link.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Projects
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Scroll To Top
const btnScrollToTop = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
        btnScrollToTop.style.display = 'block';
    } else {
        btnScrollToTop.style.display = 'none';
    }
});

btnScrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// if (typeof(worker) !=="undefined") {
//     // Yes! Web Worker support!
//     var worker = new Worker("my-worker.js");
//     worker.postMessage([5, 6]);
//     worker.onmessage = function(e) {
//         console.log('Message received from worker');
//         console.log(e.data);
//     }
// } else {
//     // Sorry! No Web Worker support...
// }