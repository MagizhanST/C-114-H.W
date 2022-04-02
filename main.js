function preload(){
}

function setup(){
    var canvas = createCanvas(640, 480);
    canvas.parent('canvas-holder');
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    fill('blue');
    circle(30, 30, 40);
    fill('red');
    square(590, 430, 40);
    tint(tint_color);
}

function snapshot(){
    save('student_name.png');
}

function tint_fill(){
    tint_color = document.getElementById("color_name").value;
}