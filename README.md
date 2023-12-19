# Plant Buddy (Final Submission)  
Plant Buddy is a children's plant watering assistant, indicating plants' needs based on soil moisture levels. Additionally, there is a window that changes color based on the hour of the day, providing the simulation of daylight & a plant's circadian rythm. I thought this project would be relevant for several reasons. A lot of our readings talked about technology being used as a way to paint a skewed picture of reality, and they had quite negative connotations when discussing its impact on human life. I wanted to create something that would be useful in relation to real-life objects/skills. I find it important to introduce tech as a tool, rather than as pure reward/entertainment.  
  
  
**System diagram**  

  
**FSM diagram**  
Because this project does not have any states/does not require user input, and relies on a continuous stream of live data, there is no FSM.  
  
**Circuit diagram**  

  
**Additional Info**  
I am using an external library, p5.play to animate sprites to indicate the soil moisture of the plant. The data is being fed through a capacitative soil moisture sensor, that is connected to the Arduino.  

**Process**  
I went through a number of iterations regarding this project. I was quite clear on the fact that I wanted to experiment with a soil moisture sensor from the beginning, however, the finished product went through some stages of iteration. Initially, I wanted this to be a plant sitting tool, allowing the owner to have access to the information even when not present, however, I found that with the way arudino-p5.js connection works, that would not be feasible. I moved on to brainstorming a context where such real-time information would be useful, on the spot.  

Furthermore, I originally wanted the arduino, and the sensor to be enclosed in an object that could be directly put into soil, however, I found that it would be too bulky, and decided to separate out the chords + arduino enclosure, and tie together in a narrative that makes sense (= string phone).
  
After user testing, I removed a clock that I had put next to the plant buddy in the p5.js sketch, upon getting the feedback that the user 
# Milestone III  
In this last milestone, I wanted to get the most key parts done, the following progress has been achieved since last week:
- figured out how to use sprites, and try to animate them using commands from p5.play (the final sprite will be digitally illustrated, this week was about figuring out the mechanism)  
[![GZo1j4.th.png](https://imgpile.com/images/GZo1j4.th.png)](https://imgpile.com/i/GZo1j4)  
- create the backdrop setting  
[![GZo5fh.th.png](https://imgpile.com/images/GZo5fh.th.png)](https://imgpile.com/i/GZo5fh)  
- window with changing colors in accordance to the hour of the day (I made it work but I don't really like the current colors so those will change)
- further calibrating the sensor for accurate soil humidity indication

Upon consultation with you, I want to collect the averages, but for some reason that did not work when I tried the code, as no values were being sent over. So I will try it again after class on Weds.   
  
Additionally, I purchased polymer clay to create the plant buddy. This coming week I will focus on polishing the visual of the plant buddy sprite, and create the physical enclosure for the arduino and its chords.  
  
  In response to last week's feedback, I am linking my humidity sensor here: 
    [Capacitive Soil Moisture Sensor](https://www.amazon.com/dp/B07SYBSHGX?psc=1&ref=ppx_yo2ov_dt_b_product_details)  
      
# Milestone II
**Plant Buddy**  
The project will be called Plant Buddy -- a smart assistant for kids' first plant. I am using a moisture sensor, which is feeding information into a p5.js sketch. Throughout the midterm, I realized I very much enjoy making gamified products, especially geared toward a younger audience. I think there is importance to introducing technology as a practical and helpful tool in early development, rather than a purely entertainment.
  
Plant Buddy Inspiration Mood Board:  
[![GghHES.png](https://imgpile.com/images/GghHES.png)](https://imgpile.com/i/GghHES)

**1) Code**  
Disclaimer 1: I had technical issues getting Arduino to communicate with the sketch, so I was not able to properly test my code, but I do believe that it should work approximately as envisioned.

Disclaimer 2: Figured the communication issue out with your help, now the sketch shows different states. According to this format though, it is not operating in percentages -- something to fix for next time
  
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
  
  
here are some progress sketches for the enclosure, that lead me to the above, more refined idea. I first thought I could enclose the entire circuit into an object that could be stuck into the plant, however, i found it to be quite big and bulky. I also went back and forth on this being a plant sitting tool, but the more I thought about, the more I realized that adults would perhaps not find this type of tool as helpful (based on the limited capabilities I could provide), so I started thinking how this tool could be used educationally, for a different audience. There were also some ideas of embedding the sensor into a pot, but that felt like a risky thing to do as a beginner who would be combining water and electronics.  
![GgkAvi.jpg](https://imgpile.com/images/GgkAvi.jpg)
![Ggkqhw.jpg](https://imgpile.com/images/Ggkqhw.jpg)
![Ggk2rF.jpg](https://imgpile.com/images/Ggk2rF.jpg)
  
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



