# JS30 #27: js-click-and-drag-to-scroll
This project implements a click and drag scroll to a horizontal scrolling element using vanilla JavaScript. 
## General Info
* There is one big div element that has smaller divs in it and it's called slider. All of four mouse-events and manipulation will happen on the slider.
* There is a flag variable to keep track of whether the user's mouse is down or not. It will be initialized to false.
* With the variable called startX, the initial position of the user's click will be figured out. Whenever the mousedown event occurs, the cursor's position at that moment will be set to the variable of startX.
* After finding out where the initial scroll is, the cursor position will be recalculated every single time that mouse moves.
* Lastly, it will be calculated that how far we've deviated from the initial mouse click/point to make the slider scrollable.

View demo [here](https://ozrn.github.io/js-click-and-drag-to-scroll/)
### Acknowledgments
This is one of the JS30 projects by Wes Bos.
