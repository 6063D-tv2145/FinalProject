let mSerial;
let readyToRead;
let currentHour;

let dryPlantAni;
let drowningPlantAni;
let goodPlantAni;

let currentHumidityState=0;



let windowColors = [
  // /Night
  [226, 208, 217], // 00:00 
  [217, 194, 210], // 01:00 
  [204, 172, 182], // 02:00 
  [191, 176, 154], // 03:00 
  [178, 148, 126], // 04:00 

  //Sunrise
  [165, 123, 98], // 05:00 
  [151, 98, 70], // 06:00 
  [137, 73, 42], // 07:00
  [124, 54, 14], // 08:00 
  [110, 35, 0], // 09:00 

  // Day
  [243, 233, 210], // 10:00 
  [249, 226, 181], // 11:00 
  [253, 242, 154], // 12:00 
  [248, 240, 128], // 13:00 
  [241, 229, 106], // 14:00
  [235, 220, 84], // 15:00 
  [228, 211, 62], // 16:00 
  [221, 201, 40], // 17:00 

  // Sunset 
  [207, 192, 0], // 18:00
  [207, 183, 0], // 19:00
  [245, 226, 217], // 20:00
  [242, 208, 202], // 21:00 
  [237, 190, 203], // 22:00 
  [232, 169, 202], // 23:00
];


function connect(){
  mSerial.open(9600)
  readyToRead=true;

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mSerial = createSerial();
  readyToRead=false;

  let mConnectButton = createButton("Connect To Serial");
  mConnectButton.position(width / 2, height / 2);
  mConnectButton.mousePressed(connect);


  dryPlantAni = loadAnimation(
		'Assets/dryplant/plantbuddy-dry-01.png',
		'Assets/dryplant/plantbuddy-dry-02.png',
		'Assets/dryplant/plantbuddy-dry-03.png',
		'Assets/dryplant/plantbuddy-dry-04.png',
    );

  dryPlantAni.frameDelay = 10;

  drowningPlantAni = loadAnimation(
		'Assets/drowningplant/plantbuddy-drowning-01.png',
		'Assets/drowningplant/plantbuddy-drowning-02.png',
		'Assets/drowningplant/plantbuddy-drowning-03.png',
		'Assets/drowningplant/plantbuddy-drowning-04.png',
    );

  drowningPlantAni.frameDelay = 10;

  goodPlantAni = loadAnimation(
		'Assets/goodplant/plantbuddy-good-01.png',
		'Assets/goodplant/plantbuddy-good-02.png',
		'Assets/goodplant/plantbuddy-good-03.png',
		'Assets/goodplant/plantbuddy-good-04.png',
    );

  goodPlantAni.frameDelay = 10;


}

function draw() {
  background(246, 240, 236)


  //wallpaper for loop
    for (let wXpos = 0; wXpos <= width; wXpos += 190) {
      drawWallpaper(wXpos, 100);
    }

    //table
    fill(255, 209, 179)
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
  rect(windowWidth/2, windowHeight/3, 600, 450, 20);

  if (mSerial.opened() && readyToRead){
    mSerial.clear();
    mSerial.write(10);
    readyToRead = false;
  }

  if (mSerial.opened() && mSerial.availableBytes() > 0) {
    let humidity = mSerial.readUntil ("\n");
    print(humidity);


    if (humidity < 2700) {
      currentHumidityState=0
      // clear();
      // animation(drowningPlantAni, 550, 450); //plant is "drowning"
    } else if (humidity < 3299) {
      currentHumidityState=1
      // clear();
      // animation(goodPlantAni, 550, 450); // plant is doing well
    } else if (humidity > 3298) {
      currentHumidityState=2
      // clear();
      // animation(dryPlantAni, 550, 449) // plant is in drought
    }

  
// keeping track of the 4 last values, and only shift the sprite when the last 4 have been the same
// week 12 -- taking an average; would manage the spikes; consistent values; after the average, send over the average to print instead of the raw value
// make a global variable that keeps track of which state I am in -- and the if statement updates the variable;
    readyToRead = true;
  } 

  if (currentHumidityState==0) {
    animation(drowningPlantAni, 550, 450); //plant is "drowning"
  } else if (currentHumidityState==1) {
    animation(goodPlantAni, 550, 450); // plant is doing well
  } else if (currentHumidityState==2) {
    animation(dryPlantAni, 550, 449) // plant is in drought
  }
  
  }

function drawWallpaper (wXpos,barWidth){
  strokeWeight (0)
  fill(255,120,95)
  rectMode(CORNER)
  rect(wXpos, 0, barWidth, windowHeight)
}