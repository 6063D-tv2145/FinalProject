let mSerial;
let connectButton;
let readyToRead;
let currentHour;

let dryPlantAni;
let drowningPlantAni;
let goodPlantAni;

let curtains;
let currentHumidityState=0;



let windowColors = [
[0, 34, 86], //12 AM
[58, 42, 102], //1 AM
[100, 49, 112], //2 AM
[139, 56, 117], //3 AM
[175, 66, 117], //4 AM
[207, 81, 112], //5 AM
[233, 102, 104], //6 AM
[253, 127, 95], //7 AM
[255, 157, 86], //8 AM
[255, 189, 81], //9 AM
[255, 222, 85], //10 AM
[253, 255, 102], //11 AM
[255, 222, 85], //12 PM
[255, 189, 81], //1 PM
[255, 157, 86], //2 PM
[253, 127, 95], //3 PM
[233, 102, 104], //4 PM
[207, 81, 112], //5 PM
[175, 66, 117], //6 PM
[139, 56, 117], //7 PM
[100, 49, 112], //8 PM
[58, 42, 102], //9 PM
[0, 34, 86], //10 PM
[58, 42, 102], //11 PM
];


function connect(){
  mSerial.open(9600)
  readyToRead=true;

}

function connectToSerial() {
  if (!mSerial.opened()) {
    mSerial.open(9600);

    readyToReceive = true;
    connectButton.hide();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mSerial = createSerial();
  readyToRead=false;

  connectButton = createButton("Connect To Serial");
  connectButton.position(width / 2, height / 2);
  connectButton.mousePressed(connectToSerial);



  dryPlantAni = loadAnimation(
		'Assets/dryplant/plantbuddy-dry-01.png',
		'Assets/dryplant/plantbuddy-dry-02.png',
		'Assets/dryplant/plantbuddy-dry-03.png',
		'Assets/dryplant/plantbuddy-dry-04.png',
    'Assets/dryplant/plantbuddy-dry-05.png',
    'Assets/dryplant/plantbuddy-dry-06.png',
    'Assets/dryplant/plantbuddy-dry-07.png',
    'Assets/dryplant/plantbuddy-dry-08.png',
    'Assets/dryplant/plantbuddy-dry-09.png',
    'Assets/dryplant/plantbuddy-dry-10.png',
    'Assets/dryplant/plantbuddy-dry-11.png',
    'Assets/dryplant/plantbuddy-dry-12.png',
    'Assets/dryplant/plantbuddy-dry-01.png',

    );

  dryPlantAni.frameDelay = 10;

  drowningPlantAni = loadAnimation(
		'Assets/drowningplant/plantbuddy-drowning-01.png',
		'Assets/drowningplant/plantbuddy-drowning-02.png',
		'Assets/drowningplant/plantbuddy-drowning-03.png',
		'Assets/drowningplant/plantbuddy-drowning-04.png',
    'Assets/drowningplant/plantbuddy-drowning-05.png',
    'Assets/drowningplant/plantbuddy-drowning-06.png',
    'Assets/drowningplant/plantbuddy-drowning-07.png',
    );

  drowningPlantAni.frameDelay = 10;

  goodPlantAni = loadAnimation(
		'Assets/goodplant/plantbuddy-good-01.png',
		'Assets/goodplant/plantbuddy-good-02.png',
		'Assets/goodplant/plantbuddy-good-03.png',
		'Assets/goodplant/plantbuddy-good-04.png',
    'Assets/goodplant/plantbuddy-good-05.png',
    'Assets/goodplant/plantbuddy-good-06.png',
    'Assets/goodplant/plantbuddy-good-07.png',
    'Assets/goodplant/plantbuddy-good-08.png',
    'Assets/goodplant/plantbuddy-good-09.png',
    'Assets/goodplant/plantbuddy-good-10.png',
    'Assets/goodplant/plantbuddy-good-11.png',
    'Assets/goodplant/plantbuddy-good-12.png',
    );

  goodPlantAni.frameDelay = 10;

  // Background Asset Loading
  curtains = loadImage('Assets/window.png');
  IBMPlex = loadFont('Assets/IBMPlexMono-SemiBold.ttf')


}

function draw() {
  background(246, 240, 236)


  //wallpaper for loop
    for (let wXpos = 0; wXpos <= width; wXpos += 190) {
      drawWallpaper(wXpos, 100);
    }

    //table
    fill(255,199,180)
    rect(0,windowHeight/1.3,windowWidth,windowHeight)


  // Get the current hour
  currentHour = hour();
  
  // color based on the hour
  let colorIndex = currentHour % windowColors.length;
  let color = windowColors[colorIndex];

  // Draw the window
  fill(color);
  stroke("white");
  strokeWeight(3)
  rectMode(CENTER)
  rect(windowWidth/2, windowHeight/3, 800, 450, 20);

// Curaints + Window Lines
  imageMode(CENTER)
  image(curtains,windowWidth/2, windowHeight/3);


// Plant sensor info + Animation triggers
  if (mSerial.opened() && readyToRead){
    mSerial.clear();
    mSerial.write(10);
    readyToRead = false;
  }

  let humidity = mSerial.readUntil ("\n");

  if (mSerial.opened() && mSerial.availableBytes() > 0) {
    print(humidity);


    if (humidity < 2700) {
      currentHumidityState=0 //plant is overwatered
    } else if (humidity < 3299) {
      currentHumidityState=1 // plant is doing well
    } else if (humidity > 3298) {
      currentHumidityState=2  // plant is in drought
    }


    readyToRead = true;
  } 

  if (currentHumidityState==0) {
    animation(drowningPlantAni, windowWidth/2, windowHeight/2); //plant is overwatered
  } else if (currentHumidityState==1) {
    animation(goodPlantAni,windowWidth/2, windowHeight/2); // plant is doing well
  } else if (currentHumidityState==2) {
    animation(dryPlantAni, windowWidth/2, windowHeight/2) // plant is in drought
  }
  

  // // Alarm Clock (Removed based on feedback)
  //   let h = hour();
  //   let m = minute();
  //   let s = second();

  //   h = nf(h, 2);
  //   m = nf(m, 2);
  //   s = nf(s, 2);

  
  //   // clock shape
  //   rectMode(CENTER)
  //   ellipseMode(CENTER)

  //   noStroke()
  //   // fill(80,255,185);
  //   // ellipse(150, windowHeight-150, 40, 40)

  //   fill(0,105,203);
  //   ellipse(110, windowHeight-55, 40, 40)
  //   ellipse(190, windowHeight-55, 40, 40)

  //   fill(0,116,223);
  //   rect(150, windowHeight-100, 180, 100,24);


  
  //   // Display the time 
  //   fill(255);
  //   textFont(IBMPlex)
  //   textAlign(CENTER, CENTER);
  //   textSize(24);
  //   text(`Time`, 150, windowHeight-125);
  //   textSize(32);
  //   text(`${h}:${m}:${s}`, 150, windowHeight-95);
  }

function drawWallpaper (wXpos,barWidth){
  strokeWeight (0)
  fill(255,120,95)
  rectMode(CORNER)
  rect(wXpos, 0, barWidth, windowHeight)
}
