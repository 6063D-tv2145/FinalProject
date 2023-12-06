let mSerial;
let readyToRead;

function receiveSerial() {
  let line = mSerial.readUntil("\n");
  trim(line);
  if (!line) return;

  if (line.charAt(0) != "{") {
    print("error: ", line);
    readyToReceive = true;
    return;
  }

  let data = JSON.parse(line).data;

  readyToReceive = true;
}


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
  if (readyToRead){
    mSerial.clear();
    mSerial.write(10);
    readyToRead = false;
  
  }

  if (mSerial.opened() && mSerial.availableBytes() > 0) {
    let mLine = mSerial.readUntil ("\n");
    print(mLine);

    mLineValue = parseInt(mLine);

    if (mLineValue > humidity) {
      background("CornflowerBlue"); //plant is "drowning"
    } else if (humidity > 18 && humidity < 40) {
      background("DarkSeaGreen"); // plant is doing well
    } else if (humidity < 15) {
      background("Coral"); // plant is in drought
    }


    readyToRead = true;
  } 


}