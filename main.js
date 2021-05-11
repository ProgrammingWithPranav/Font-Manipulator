function setup() {
  video = createCapture(VIDEO);
  video.size(550, 550);

  canvas = createCanvas(550, 550);
  canvas.position(700, 200);
  pose = ml5.poseNet(video, modelLoaded);

  pose.on("pose", gotResults);
}

function draw() {
  background(255, 0, 0);
}
