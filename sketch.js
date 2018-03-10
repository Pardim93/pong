let leftscore = 0;
let rightscore = 0;

var img;
function preload() {
    img  = loadImage("data/bg.jpg");  
    ding = loadSound("data/roasty.mp3");

}
function setup() {
    createCanvas(600, 400);
    puck  = new Puck();
    left  = new Paddle(true);
    right = new Paddle(false);
}

function draw() {
    background(0);
    image(img, 0, 0);
    puck.checkPaddleRight(right);
    puck.checkPaddleLeft(left);

    left.show();
    right.show();
    left.update();
    right.update();
    
    puck.update();
    puck.edges();
    puck.show();
    
    fill(255);
    textSize(32);
    text(leftscore, 32, 40);
    text(rightscore, width-64, 40);
}


function keyReleased() {
    left.move(0);
    right.move(0);
}

function keyPressed() {

    console.log(key);
    if (key == 'A') {
        left.move(-10);
    } else if (key == 'Z') {
        left.move(10);
    }

    if (key == 'J') {
        right.move(-10);
    } else if (key == 'M') {
        right.move(10);
    }
}