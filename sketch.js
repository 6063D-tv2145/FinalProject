let mSerial;
let readyToRead;

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
}

function draw() {
  if (mSerial.opened() && readyToRead){
    mSerial.clear();
    mSerial.write(10);
    readyToRead = false;
  }

  if (mSerial.opened() && mSerial.availableBytes() > 0) {
    let humidity = mSerial.readUntil ("\n");
    print(humidity);


    if (humidity < 2700) {
      background("CornflowerBlue"); //plant is "drowning"
    } else if (humidity < 3299 && humidity > 2700) {
      background("DarkSeaGreen"); // plant is doing well
    } else if (humidity > 3531 && humidity > 3299) {
      background("Coral"); // plant is in drought
    }


    readyToRead = true;
  } 


}