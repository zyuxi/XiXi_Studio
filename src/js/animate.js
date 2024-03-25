document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('animatedImage');
    let frame = 1;
    const totalFrames = 9;
    const animationSpeed = 1; // 换帧间隔，单位是毫秒

    setInterval(() => {
        frame = frame < totalFrames ? frame + 1 : 1;
        image.src = `frame${frame}.png`;
    }, animationSpeed);
});
