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
  if (readyToRead){
    mSerial.clear();
    mSerial.write(10);
    readyToRead = false;
  
  }

  if (mSerial.opened() && mSerial.availableBytes() > 0) {
    let mLine = mSerial.readUntil ("\n");
    print(mLine);

    mLineValue = parseInt(mLine);

    if (mLineValue > 45) {
      background("CornflowerBlue"); //plant is "drowning"
    } else if (mLineValue > 18 && mLineValue < 40) {
      background("DarkSeaGreen"); // plant is doing well
    } else if (mLineValue < 15) {
      background("Coral"); // plant is in drought
    }


    readyToRead = true;
  } 


}