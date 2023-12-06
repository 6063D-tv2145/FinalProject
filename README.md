# Milestone II
**Plant Buddy**  
The project will be called Plant Buddy -- a smart assistant for kids' first plant. I am using a moisture sensor, which is feeding information into a p5.js sketch. Throughout the midterm, I realized I very much enjoy making gamified products, especially geared toward a younger audience. I think there is importance to introducing technology as a practical and helpful tool in early development, rather than a purely entertainment.
  
Plant Buddy Inspiration Mood Board:  
[![GghHES.png](https://imgpile.com/images/GghHES.png)](https://imgpile.com/i/GghHES)

**1) Code**  
Disclaimer: I had technical issues getting Arduino to communicate with the sketch, so I was not able to properly test my code, but I do believe that it should work approximately as envisioned.
  
The code itself is along the following lines:  
  
**Sketch:**   
if ( humidity value > 45%) {  
  animated sprite of plant buddy getting covered in water -- I would like to see if I can make my own sprites (extrenally illustrated) and animated via p5.play;     
}
else if ( humidity value > 18% humidity value < 40%) {  
  animated sprite of a plant buddy's eyes turning into X-X -- symbolizing dryness  
}  
else ( humidity value < 15%( {  
animated sprite of plant budy doing well/slightly nodding head 
}  
  
**arduino:**  
Taking in the value and converting it into percentage.
  
I need to calibrate and do more observations on what these numbers should be. As of now, referred to the general guidelines of plants having recommended humidity of 20%-40%.  
  
 For now, I've tested values outside of soil, medium-moisture soil, freshly watered soil, etc. I am also finding differences in values based on how deep the sensor is within the ground, therefore I will have to monitor more closely how the sensor is put in.
[![GghO7l.png](https://imgpile.com/images/GghO7l.png)](https://imgpile.com/i/GghO7l)
    
**Backdrop:**  
- scene of a windowsil from inside of an apartment; on the wall there will be a clock, with info about moisture (showcasing the percentage, date, and time)
- changing time, changes background view from the window every minute -- colors according to the sunrise/sunset
    
**2) Circuit**
Arduino + moisture sensor + potentially a power bank
[![GgkidL.png](https://imgpile.com/images/GgkidL.png)](https://imgpile.com/i/GgkidL)

    
**3) Enclosure**  
[![GgkPZ1.png](https://imgpile.com/images/GgkPZ1.png)](https://imgpile.com/i/GgkPZ1)  
For the enclosure, I will create a either 3d printed or laser cut box to keep the breadboard and arduino in.There will be a small hole to let the cord of the moisture sensor out. On top of the box, I will create a polymer clay sculpture of the Plant Buddy, who will be holding a paper cup to its ear, pretending to be on a phone line with the plant. The cord will be protected via a layer of green yarn (I am thinking to crochet over the chord, maybe add crochet leaves as well, to help it blend in), and the sensor will be put into a plant (and also have a polymer clay "paper cup" attached to it. Giving the visual of the plant buddy phoning with the plant.
  
I think that with this entire project, I am trying to practice a product-development mindset, thinking about a good narrative, and also a strong use case. I find it meaningful to make things I could imagine people actually wanting to own (in some improved version)

# Final Project Ideas
**1. Air Quality Monitor**
I have seen in many places, that there are CO2 monitors that can be purchased and used with Arduinos. I was thinking that it would be great to have this sensor collect input, and in processing, create an aesthetically pleasing visual, that is continuously updating with the data, and lets the user know when to open the windows, and in cases of very bad air quality, warn the user and give them resources on what to do to keep themselves safe.
Additionally, (this is quite a stretch), but I found this bird air quality sensor, in which the bird 'drops dead' when the air quality is bad. I thought to myself if something of a similar concept i.e. movement is initiated based on the air quality input, would be feasible using a servo motor (which I've seen used in several projects on the arduino project hub).
I do really like this idea, I am worried about the quality of the sensors though, and having the entire project rely on it. It would also be quite difficult to test. Alternatively, I could use this idea of movement via servo motor but not rely on the air quality monitor, but just focus on some sort of interaction that would create input in processing.  
[Monitor inspiration example](https://projecthub.arduino.cc/abid_hossain/air-quality-monitor-14f9b4)  
[Bird monitor](https://www.birdie.design/welcome?gad_source=1&gclid=EAIaIQobChMI1cjKzv_lggMV401HAR1Rgw30EAAYASAAEgIFCPD_BwE)  
[Amazon link for sensor](https://www.amazon.com/BONATECH-Arduino-Modules-Project-Detection/dp/B07D9H74LT/ref=sr_1_15crid=31P6P1JIXN3IB&keywords=air+quality+sensor+co2+arduino&qid=1701150269&sprefix=air+quality+sensor+co2+arduino%2Caps%2C80&sr=8-15)  
[Link for servo](https://www.amazon.com/Micro-Servos-Helicopter-Airplane-Controls/dp/B07MLR1498/ref=sr_1_8?crid=8M0VCKCGTCU3&keywords=servo%2Bfor%2Barduino&qid=1701147372&sprefix=servo%2Bfor%2Barduino%2Caps%2C100&sr=8-8&th=1)  
[![GkYCw2.png](https://imgpile.com/images/GkYCw2.png)](https://imgpile.com/i/GkYCw2)
**2.Difficult Plant Tamagotchi**  
Inspired by the [Plant Communicator](https://projecthub.arduino.cc/Arduino_Genuino/plant-communicator-0ab3c8) I thought I could use a soil [moisture sensor](https://www.amazon.com/HiLetgo-Moisture-Automatic-Watering-Arduino/dp/B01DKISKLO/ref=sr_1_4?crid=1LFBH8EIGRMBI&keywords=moisture+sensor+arduino&qid=1701147020&sprefix=moisture+sensor+%2Caps%2C117&sr=8-4), to create input and feed it into a 'Tamagotchi' like interaction in processing. The thought behind this is that I inherited a lot of plants from someone who used to live in my apartment and there are a couple of plants that are difficult to take care of and I have killed some of them. The plant in processing could be named, and the conditions for when to alert the plant carer could be customizable, making it a good tool for plant sitters.  
[![GkYZBG.md.png](https://imgpile.com/images/GkYZBG.md.png)](https://imgpile.com/i/GkYZBG)  
**3.Portrait of You(r eyes)?**  
Using the webcam to take a picture (of an eye maybe?), taking that image processing could rasterize it, and via an arduino, the size of the circles / colors could be generated. Additionally, a customization feature such as your name could also be taken as input, so the poster is as personal as possible. It could include name, date, time + eye graphic.  
[![GkiRuP.png](https://imgpile.com/images/GkiRuP.png)](https://imgpile.com/i/GkiRuP)  
Inspiration was taken from our pixel processing class and these Pinterest posters:  
![GkiDEC.jpg](https://imgpile.com/images/GkiDEC.jpg)
![GkiCVo.jpg](https://imgpile.com/images/GkiCVo.jpg)

**4.Typography poster**  
This idea is the least fleshed out, but I was thinking I could use arduino input via a button or something similar, to change attributes of text on a poster. The text could potentially be also taken in as custom text (but would likely have a character limit), and interacting with the arduino could change color, letter placement, or maybe even something fun like make it collapse (see gravity poster).  
[![GkiwBW.png](https://imgpile.com/images/GkiwBW.png)](https://imgpile.com/i/GkiwBW)  
![Gki9Cj.jpg](https://imgpile.com/images/Gki9Cj.jpg)
![GkitRS.jpg](https://imgpile.com/images/GkitRS.jpg)



