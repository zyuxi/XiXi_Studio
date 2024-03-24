/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

//E-mail
var email = document.getElementById("email");
const emailToCopy = "yuxi.zhang.zyx@outlook.com"

email.addEventListener("click", (event) => {
    // console.log("1");
    alert("Email Address 「yuxi.zhang.zyx@outlook.com」 has been copied");
});

//Wechat
var wechat = document.getElementById("wechat");
const wechatToCopy = "xixizi_999"

wechat.addEventListener("click", (event) => {
    // console.log("1");
    alert("WeChat Account 「xixizi_999」 has been copied");
});

// document.addEventListener('DOMContentLoaded', function() {
//     // 获取GIF元素
//     const gif = document.getElementById('modelGif');

//     // 为GIF添加点击事件监听器
//     gif.addEventListener('click', function() {
//         console.log('GIF clicked!');
//         // 在这里添加您希望点击GIF时执行的代码
//     });
// });


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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('modelGif').style.display = 'block'; // 显示 GIF 图像
});

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
    renderer.setSize(window.innerWidth, window.innerHeight);
})

/**
 * Scroll
 */
let scrollY = window.scrollY;
let currentSection = 0;

const gifStyles = [
    { transform: 'translate(-50%, -50%) scale(1)' },
    { transform: 'translate(20%, -100%) scale(5)' }, 
    { transform: 'translate(-180%, -70%) scale(5)',}, 
    { transform: 'translate(60%, -80%) scale(5)' }, 
    { transform: 'translate(-10%, -70%) scale(2)' },
    { transform: 'translate(-80%, -60%) scale(1.8)'}
];



window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // 假设每个部分（section）的高度与窗口高度一致
    const currentSection = Math.min(Math.floor(scrollY / window.innerHeight), gifStyles.length - 1);

    // 获取GIF元素
    const gif = document.getElementById('modelGif');

    // 应用当前部分的GIF样式
    const style = gifStyles[currentSection];
    gsap.to(gif, {
        duration: 1.5, // 动画持续时间
        ease: "power2.inOut", // 缓动函数
        transform: style.transform, // 更新 transform
    });
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
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0); // 第二个参数0表示完全透明


window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
});

/**
 * Animate
 */
const clock = new THREE.Clock();
let lastElapsedTime = 0;

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - lastElapsedTime;
    lastElapsedTime = elapsedTime;

    // if (!!model) {
    //     model.position.y = Math.sin(elapsedTime * .5) * .1 - 0.1;
    //     sphereShadow.material.opacity = (1 - Math.abs(model.position.y)) * 0.3;
    // }

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
