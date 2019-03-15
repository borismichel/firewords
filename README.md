# firewords

Firewords is a project inspired by Daniel Shiffmans Fireworks coding challenge.

I wrapped it in an express web server (Loading the font inside from file:// throws CORS), if you want to test it without mounting it on IIS or other I encourage you to use the express wrapper. 
To do so:

0) Have node.js installed
1) Download the repo and unpack
2) Open a shell and navigate to the repo folder.
3) run `npm install` to download and install express
4) run `npm start`
5) open `http://localhost:3300` in a browser

If you want to just plug and play you will find everything in the *www/* folder. 

If you want to demo this open `https://firewords.herokuapp.com` in your browser. You can pass a parameter using URL queries to print your own words (e.g. `https://firewords.herokuapp.com?My%20Great%20Word` don't worry about URL encoding).

A few things to note:

variable ´boomName´ contains the word that is "printed" (default "P5.js").
you can change the font by downloading one, placing it in */www/assets* and then changing the parameter in the `loadFont` function.
