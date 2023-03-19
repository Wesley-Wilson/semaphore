<h1 align="center">
  <p>Semaphore </p>
</h1>
<h2 align="center"><a href="https://wesley-wilson.github.io/semaphore/" target="_blank">access project</a></h2>
<h3 align="center">
<img src="./assets/img/semaphoreGif.gif">
</h3>
<br>

## 📕 About

**In this project** you can see the use of ternary, functions inside objects, calling functions dynamically and capturing the event in the object's parent.

<br>

## Buttons
**How to know which button the user clicked?**

trafficLight is a callback for the click event, thus being an argument of the event 
Thus receiving several properties, one of them being the interesting ( event.target.id )

to be more dynamic
Creating a literal object:
constant turnOn 
creating 3 functions: red,green and yellow with its image address. 
Then this function is passed to trafficLight in order to get the event, target and the target's id.


<br>

## Automatic
adds a function called automatic inside **turOn**, then the automatic function receives the setInterval -> method, which in turn receives the changeLight function and its repetition time as parameters. 

function changeLight 
an array of colors is created 
a constant color receiving the color array which in turn receives a variable storing the number 0.
Thus indicating the zero index of the initial starting point. 
its name is **colorIndex**.
at the end it asks for the application of **turnOn(color)();**
So that the colors can move forward one after one:
Created function **nextIndex** to which receives a ternary composite conditional -> if colorIndex < 2 then colorIndex gets 1 more otherwise colorIndex equals 0

But we have one last incrementation problem to solve :

because the setInterval is activated every time the automatic button is clicked, making it go faster and faster 
And in turn it doesn't stop even when another button is clicked
you need to store the setInterval id in an intervalId variable 

To solve this we created a function to stop the process
**breakAutomatic** which receives the **clearInterval** function which takes the intervalId parameter

```bash
automatic: () => intervalId = setInterval(changeLight, 1000)
```

<br>

 ## 🔨 Tools
 - [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
 - [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [SASS](https://sass-lang.com/guide)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)


<br>

## Fernando Leonid 
Professor Fernando Leonid's video channel to complement the remote classes.
- [Video](https://www.youtube.com/watch?v=EujFSEsZsk4&list=LL&index=9&t=1172s
)

## Thanks 
Picking up solid knowledge in the javascript language with the help of [Gustavo Guanabara](https://www.cursoemvideo.com/curso/javascript/), [Fernando Leonid](https://www.youtube.com/@FernandoLeonid) and other teachers who leave their free content on the internet.


