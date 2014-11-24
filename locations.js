//
//single event handler for each location
//



//var message = "(0) You find yourself in a dark kitchen. Soft light is coming through the window; it is the moonlight. You are still tired and it is hard to see around you. There is a table with what seems to be a knife on it. \n \n \n";
//this.contents = "No items.";
//checkScore();
//dispMsg(message);
/*

function bathroom() { //function bathroom() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message). Var message is the description of the room. It contains an item whose name is assigned to this.contents.
var message = "(1) You enter a dark bathroom. The pavement is extremely wet and slippery. There is a broken mirror on the side. Shards of glass are spread throughout the ground. \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function livroom() { //function livroom() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(2)You enter a dark room. It is the living room. There is a dusty couch and a broken remote controller on the ground. A door is on your right... It's strange, it shines a sort of weird blue/dark light. \n \n \n";
this.contents = "No items.";
dispMsg(message);     
}

function outside() { //function garden() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(3) You find yourself in the garden. You are outside! Fresh air fills your lungs, freedom is finally reality. Now run!\n\nGAME OVER. \n \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function bedroom() { //function bedroom() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(4) You enter the bedroom. There are a few pillows on the bed. A long curtain makes this room so dark... \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function closet() { //function closet() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(5) You enter an extremely dark closet. There is a broom and a lot of dust. Spider webs surround the room, you better get out of here before you find the creepy six-legged owner. \n \n \n";
this.contents = "No items.";
dispMsg(message);
GhostDeath();
}

function balcony() { //function balcony() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(6) As soon as you close the door, you find yourself on a balcony. Fresh air and many trees surround you. There is a creepy little statue on your left, do you want to interact with it? Click Yes or No. \n \n \n";
this.contents = "No items.";
document.getElementById("yes").disabled = false;
document.getElementById("no").disabled = false;
dispMsg(message);
}

function garage() { //function garage() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(7) You enter an extremely dark garage. As you scan the room you look down and see a pool of oil and car tracks coming out of it. There is a hammer resting on the wall on the side. \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function workshop() { //function workshop() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(8) You enter a dark workshop, the switch for the light is on your right. Do you want to switch the lights on? It may attract attention from outside. Click Yes or No \n \n \n";
this.contents = "No items.";
document.getElementById("yes").disabled = false;
document.getElementById("no").disabled = false;
dispMsg(message);
}

function garden() { //function garden() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(9) You close the door behind you and you find yourself in a garden. Fence completely surrounds you. There is a weird painting made with blood on the ground, between the grass. It says ''Collect all the artifacts and live the green again'' \n \n \n";
itemAppear(9, 4, " Scroll");
dispMsg(message);
}
*/

//TODO: function to disable buttons, less code. put the note.
//currLoc...;
// dispMsg(locArray[currLoc].name);
// function getNextLoc(div) {
// var new Loc = currLoc ;
// var dest = nav [currLoc][dir];
//if dest === -1 ) {
// disp ('no way');
//else {
//newLoc=dest;
//}
//	}
//}220 - 180
// kitchen knife - garage hammer - bathroom pieces of mirror - living room remote controller. garden find scroll. "The mystery has to be re-read". note bedroom.
//Stealth is the missing space in a lock. 5 is sacred, air is freedom. dog outside, can't leave. when light on, 5 items, little statue on balcony, under it the key to unlock the door and go out., if hammer -10, if knife -5, if piece of mirror -10, if remote -5