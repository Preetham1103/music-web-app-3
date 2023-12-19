pokemon_song = "";
unstopable_song="";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    pokemon_song = loadSound("pokemon.mp3");
    unstopable_song = loadSound("unstopable.mp3");
}

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is intialized!");
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function gotPoses(results) 
{
    if(results.length > 0 )
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX = " +leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;  
    }    
}
