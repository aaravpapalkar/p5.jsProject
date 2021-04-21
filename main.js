function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    background(220);
    stroke(255, 0, 255)
    fill(255, 0, 0)
    circle(50, 50, 80);
    circle(590, 50, 80);
    circle(50, 430, 80);
    circle(590, 430, 80);
    image(video, 125, 50, 400, 425)
}