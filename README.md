How to run it:

1. Open terminal.
2. Launch: "npm install"
3. Launch: "npm start"
4. The project will open in port: 3000.

What was my approach and main issues?

I tried to use as much modern React as I could, writing components functionally and setting up Context API for Global State Management. There are no external libraries used.
The biggest problem I had was with including Google Maps and Google Places APIs into the project. I got Google Places to work once with rewriting functional component into a class component and using a React script injection library. Google Maps API wasn't working though and I realized I was doing two seperate fetchings instead of one for both APIs. 
I tried to fix that, but in the end I didn't know how to do it in time.