//
//Setting global variables.
//

//currLoc is a global variable that determines the initial location.
var currLoc=0;
//countzero is a global variable created to determine whether the player has never been in room zero.
var countzero  = false;
//countone is a global variable created to determine whether the player has never been in room one.
var countone  = false;
//counttwo is a global variable created to determine whether the player has never been in room two.
var counttwo  = false;
//countthree is a global variable created to determine whether the player has never been in room three.
var countthree  = false;
//countfour is a global variable created to determine whether the player has never been in room four.
var countfour = false;
//countfive is a global variable created to determine whether the player has never been in room five.
var countfive = false;
//countsix is a global variable created to determine whether the player has never been in room six.
var countsix = false;
//countseven is a global variable created to determine whether the player has never been in room seven.
var countseven = false;
//counteight is a global variable created to determine whether the player has never been in room eight.
var counteight = false;
//countnine is a global variable created to determine whether the player has never been in room nine.
var countnine = false;
//score is a global variable representing the score of the player.
var score=0;
//navigationErrorCount is a global variable created to keep track of the amount of "mistakes" that the player commits.
var navigationErrorCount = 0;
//sarcasmThreshold is a global variable created to establish a total amount of "mistakes". When the amount of mistakes is reached, the game will "get sassy".
var sarcasmThreshold = 5;
//itemCount is a global variable created to keep track of the amount of items gathered by the player.
var itemCount=0;
//dogLoc is a global variable created to keep track of the dog's Location.
var dogLoc=3;
//ghost is a global variable created to keep track of the status ghost.
var ghost=false;
//north is a global variable created to assign a number to North.
var north = 0;
//south is a global variable created to assign a number to South.
var south = 1;
//west is a global variable created to assign a number to West.
var west = 2;
//east is a global variable created to assign a number to East.
var east = 3;
//gameOver is a global variable created to keep track of the error of the player
var gameOver = 0;
//completeStage is a global variable created to keep track of the stages in the CompLab.
var completeStage=-1;
//bag is a global variable (array) created to store the items in the player's inventory.
var bag= [];

function Victory () { //Victory() takes no parameter. It displays when, in the location 2, going South, the player is able to win. The player wins when he/she satisfies all the requirements.
	if(itemCount<5) {
		dispMsg ("You haven't collected all the items");
	} else {
		if(dogLoc===3) {	
			dispMsg ("A dog is barking outside. You cannot leave or people will find you.");
		} else {
			if(ghost!=true) {
				dispMsg ("There is a sort of magic, it doesn't let you open the door.");
			}
		}
	}
	if(currLoc ===  2 && ghost===true && itemCount>=5 && dogLoc!=3) {
		return 'end';
	}	
}

function tutorial() { //Function tutorial() displays the message that explains the gameplay, to the second text area.
	scrollUp();
	dispMsgSecond("--Tutorial--\n To move through the Map you can:\n   -Use the buttons.\n   -Type 'n', 's', 'w', or 'e'.\n   -Use the WASD Box to use WASD.\n Go find all the items in order to escape! \n R: To take | SpaceBar: To search\n X: To show the Inventory \n Use the map to help yourself navigate and find a way out.\n --/Tutorial-- \n \n \n");
}

function locat (newid) { //function locat(newid) takes a parameter, and it is the class for the rooms. It tells the basic attributes of every room.
	this.id = newid;
	this.name = "Room";
	this.description = "It is a room.";
	this.item = "No items.";
	this.toString = function() {
                                 return this.description +
										this.item;
                   }

}

function item () { //function item() takes no parameter, and it is the class for the items. It tells the basic attributes of every item.
	this.name = "Item";
	this.description = " ";
	this.toString = function() {
								return this.name;
								}
}


var locArray = [];

var scroll = new item();
scroll.name = " Scroll";

var rune = new item();
rune.name = " Rune";
rune.description = "Freedom is achieved by the sum\n 10, obtained by summing 7 + 0 +\n 1 + 2. Then live the green\n again, move the animal and\n obtain the spirit. Spiderman\n will then be evil, remember!";

function init(){ //init() function takes no parameter. It is the initial function that starts to work as soon as the page is opened, thanks to onload in the body tag in the HTML part of the program. It creates the instances of the rooms and the items.
	
	var knife = new item ();
	knife.name = " Knife";
	
	var hammer = new item();
	hammer.name = " Hammer";
	
	var mirror = new item();
	mirror.name = " Pieces of Mirror";
	
	var remote = new item();
	remote.name = " Remote Controller";
	
	var theKitchen = new locat(0);
	theKitchen.description = "(0) You find yourself in a dark kitchen. Soft light is coming through the window; it is the moonlight. You are still tired and it is hard to see around you. There is a table with what seems to be a knife on it. \n \n \n"
	theKitchen.name="Kitchen";
	theKitchen.item = knife;
	locArray.push(theKitchen);
	dispMsg(theKitchen.description);
	
	var theBathroom = new locat(1);
	theBathroom.description = "(1) You enter a dark bathroom. The pavement is extremely wet and slippery. There is a broken mirror on the side. Shards of glass are spread throughout the ground. \n \n \n";
	theBathroom.name="Bathroom";
	theBathroom.item = mirror;
	locArray.push(theBathroom);
	
	var theLvngRoom = new locat(2);
	theLvngRoom.description = "(2)You enter a dark room. It is the living room. There is a dusty couch and a broken remote controller on the ground. A door is on your right... It's strange, it shines a sort of weird blue/dark light. \n \n \n";
	theLvngRoom.name="Living Room";
	theLvngRoom.item = remote;
	locArray.push(theLvngRoom);
	
	var theOutside = new locat(3);
	theOutside.description = "(3) You find yourself in the garden. You are outside! Fresh air fills your lungs, freedom is finally reality. Now run!\n\nGAME OVER. \n \n \n \n";
	theOutside.name="Outside";
	locArray.push(theOutside);

	var theBedroom = new locat(4);
	theBedroom.description = "(4) You enter the bedroom. There are a few pillows on the bed. A long curtain makes this room so dark... \n \n \n";
	theBedroom.name="Bedroom";
	locArray.push(theBedroom);
	
	var theCloset = new locat(5);
	theCloset.description = "(5) You enter an extremely dark closet. There is a broom and a lot of dust. Spider webs surround the room, you better get out of here before you find the creepy six-legged owner. \n \n \n";
	theCloset.name="Closet";
	locArray.push(theCloset);
	
	var theBalcony = new locat(6);
	theBalcony.description = "(6) As soon as you close the door, you find yourself on a balcony. Fresh air and many trees surround you. There is a creepy little statue on your left, do you want to interact with it? Click Yes or No. \n \n \n";
	theBalcony.name="Balcony";
	locArray.push(theBalcony);
		
	var theGarage = new locat(7);
	theGarage.description = "(7) You enter an extremely dark garage. As you scan the room you look down and see a pool of oil and car tracks coming out of it. There is a hammer resting on the wall on the side. \n \n \n";
	theGarage.name="Garage";
	theGarage.item = hammer;
	locArray.push(theGarage);
	
	var theWorkshop = new locat(8);
	theWorkshop.description = "(8) You enter a dark workshop, the switch for the light is on your right. Do you want to switch the lights on? It may attract attention from outside. Click Yes or No \n \n \n";
	theWorkshop.name="Workshop";
	locArray.push(theWorkshop);

	var theGarden = new locat(9);
	theGarden.description = "(9) You close the door behind you and you find yourself in a garden. Fence completely surrounds you. There is a weird painting made with blood on the ground, between the grass. It says ''Collect all the artifacts and live the green again'' \n \n \n";
	theGarden.name="Garden";
	locArray.push(theGarden);
	
	var CompLab = new locat(10);
	CompLab.description = "(10) The door behind you shuts by itself. Dirty water is dripping from the ceiling, crashing into the ground. The echo of this sound makes you shiver. A voice in the background starts talking to you.\n GlaDIOS: Welcome to the Computer\n Laboratory. Do you wanna play a little\n game with me?\n \n \n";
	CompLab.name = "Computer Laboratory";
	locArray.push(CompLab);
	
	currLoc = locArray[0].id; //The game starts in the Kitchen.
	
}

function Over() { //Over() takes not parameter. It is used to disable everything in the game when the player loses. It empties the inventory and the location becomes 0.
	if (gameOver === 5 || currLoc === 5) {
		dispMsg("GAME OVER\n\n\n\n");
		bag=[];
		currLoc=0;
		document.getElementById("North").disabled = true;
		document.getElementById("South").disabled = true;
		document.getElementById("West").disabled = true;
		document.getElementById("East").disabled = true;
		document.getElementById("txtCommand").disabled = true;
		document.getElementById("txtCommandTwo").disabled = true;
		document.getElementById("go").disabled = true;
		document.getElementById("Tutorial").disabled = true;
		document.getElementById("inventory").disabled = true;
		document.getElementById("yes").disabled = true;
		document.getElementById("no").disabled = true;
		document.getElementById("search").disabled = true;
		document.getElementById("take").disabled = true;
	}
}

function goNorth (){ //goNorth() takes no parameter. It is used to go North from the current Location.
	navigation(0);
}

function goSouth() { //goSouth() takes no parameter. It is used to go South from the current Location.
	navigation(1);
}

function goWest() { //goWest() takes no parameter. It is used to go West from the current Location.
	navigation(2);
}

function goEast() { //goEast() takes no parameter. It is used to go East from the current Location.
	navigation(3);
}

function navigation (dir){// function navigation(dir) takes a parameter. It is done with the switch-case method which makes the code shorter. Depending on the value of currLoc and dir, there are different cases that trigger.
	document.getElementById("North").disabled = false;
	document.getElementById("South").disabled = false;
	document.getElementById("West").disabled = false;
	document.getElementById("East").disabled = false;
	document.getElementById("yes").disabled = true;
	document.getElementById("no").disabled = true;//At the beginning of the game I decided to not block the buttons so that the function navigationError() can trigger and it is not useless.
	scrollUp();
	switch(currLoc) {
		case 0: switch (dir) {
					case 0: currLoc = locArray [7].id;
							dispMsg(locArray[7].description);
							document.getElementById("map").src = "map7.jpg";
							document.getElementById("North").disabled = true; //Disables the buttons that are unavailable because there are no rooms towards that direction
							document.getElementById("West").disabled = true;
							break;
					case 1: currLoc = locArray [1].id;
							dispMsg(locArray[1].description);
							document.getElementById("map").src = "map1.jpg";
							document.getElementById("South").disabled = true;
							break;
					case 2: currLoc = locArray [6].id;
							dispMsg(locArray[6].description);
							document.getElementById("map").src = "map6.jpg";
							document.getElementById("North").disabled = true;
							document.getElementById("South").disabled = true;
							document.getElementById("West").disabled = true;
							document.getElementById("yes").disabled = false;
							document.getElementById("no").disabled = false;
							break;
					default: navigationError();
				} break;
		case 1: switch (dir) {
					case 0: currLoc = locArray [0].id;
							dispMsg(locArray[0].description);
							document.getElementById("map").src = "map0.jpg";
							document.getElementById("East").disabled = true;
							break;
					case 2: currLoc = locArray [8].id;
							dispMsg(locArray[8].description);
							document.getElementById("map").src = "map8.jpg";
							document.getElementById("North").disabled = true;
							document.getElementById("West").disabled = true;
							document.getElementById("yes").disabled = false;
							document.getElementById("no").disabled = false;
							break;
					case 3: currLoc = locArray [2].id;
							dispMsg(locArray[2].description);
							document.getElementById("map").src = "map2.jpg";							
							break;
					default: navigationError();
				} break;
		case 2: switch (dir) {
					case 0: currLoc = locArray [5].id;
							dispMsg(locArray[5].description);
							document.getElementById("map").src = "map5.jpg";
							document.getElementById("North").disabled = true;
							document.getElementById("West").disabled = true;
							document.getElementById("East").disabled = true;
							if (ghost===true) {
								GhostDeath();
								alert(ghost);
							}
							break;
					case 1: if (Victory() === 'end') {
								currLoc = locArray [3].id;
								dispMsg(locArray[3].description);
								document.getElementById("map").src = "map3.jpg";
								document.getElementById("North").disabled = true;
								document.getElementById("South").disabled = true;
								document.getElementById("West").disabled = true;
								document.getElementById("East").disabled = true;
							}
							break;
					case 2: currLoc = locArray [1].id;
							dispMsg(locArray[1].description);
							document.getElementById("map").src = "map1.jpg";
							document.getElementById("South").disabled = true;
							break;
					case 3: currLoc = locArray [4].id;
							dispMsg(locArray[4].description);
							document.getElementById("map").src = "map4.jpg";
							document.getElementById("North").disabled = true;
							document.getElementById("South").disabled = true;
							document.getElementById("East").disabled = true;
							break;
				} break;
		case 3: switch (dir) {
					case 0: currLoc = locArray [2].id;
							dispMsg(locArray[2].description);
							document.getElementById("map").src = "map2.jpg";
							break;
					default: navigationError();
				} break;
		case 4: switch (dir) {
					case 2: currLoc = locArray [2].id;
							dispMsg(locArray[2].description);
							document.getElementById("map").src = "map2.jpg";
							break;
					default: navigationError();
				} break;
		case 5: switch (dir) {
					case 1: currLoc = locArray [2].id;
							dispMsg(locArray[2].description);
							document.getElementById("map").src = "map2.jpg";
							break;
					default: navigationError();
				} break;
		case 6: switch (dir) {
					case 3: currLoc = locArray [0].id;
							dispMsg(locArray[0].description);
							document.getElementById("map").src = "map0.jpg";
							document.getElementById("East").disabled = true;
							break;
					default: navigationError();
				} break;
		case 7: switch (dir) {
					case 1: currLoc = locArray [0].id;
							dispMsg(locArray[0].description);
							document.getElementById("map").src = "map0.jpg";
							document.getElementById("East").disabled = true;
							break;
					case 3: currLoc = locArray[10].id;
							dispMsg(locArray[10].description);
							document.getElementById("map").src = "map10.jpg";
							document.getElementById("yes").disabled = false;
							document.getElementById("no").disabled = false;
							document.getElementById("txtCommandTwo").disabled = true;
							break;
					default: navigationError();
				} break;
		case 8: switch (dir) {
					case 1: currLoc = locArray [9].id;
							dispMsg(locArray[9].description);
							document.getElementById("map").src = "map9.jpg";
							document.getElementById("South").disabled = true;
							document.getElementById("West").disabled = true;
							document.getElementById("East").disabled = true;
							if (itemCount === 4 ){
								locArray[currLoc].item = scroll;
							}
							break;
					case 3: currLoc = locArray [1].id;
							dispMsg(locArray[1].description);
							document.getElementById("map").src = "map1.jpg";
							document.getElementById("South").disabled = true;
							break;
					default: navigationError();
				} break;
		case 9: switch (dir) {
					case 0: currLoc = locArray [8].id;
							dispMsg(locArray[8].description);
							document.getElementById("map").src = "map8.jpg";
							document.getElementById("North").disabled = true;
							document.getElementById("West").disabled = true;
							document.getElementById("yes").disabled = false;
							document.getElementById("no").disabled = false;
							break;
					default: navigationError();
				} break;
		case 10: switch (dir) {
					case 2: if (completeStage!=-1 && completeStage!=0 && completeStage!=1 && completeStage!=3) {
								currLoc = locArray [7].id;
								dispMsg(locArray[7].description);
								document.getElementById("map").src = "map7.jpg";
								document.getElementById("North").disabled = true;
								document.getElementById("West").disabled = true;
								document.getElementById("yes").disabled = false;
								document.getElementById("no").disabled = false;
								document.getElementById("txtCommandTwo").disabled = false;
							} else {
								Yes();
								dispMsg('You have to finish the puzzle in order to escape from the Computer Laboratory.\n-------------------------');
								document.getElementById("yes").disabled = false;
								document.getElementById("no").disabled = false;
							}
							break;
					default: navigationError();
				}
	}
	checkScore();
	var desc ="Score: " + score + "\n";
	dispMsg(desc);
}

function dispMsg(message) { //Function dispMsg(message) displays the message given as input plus the Score in the Main text area. The assignment says that the name should be updateDisplay but I already had the code from Project two full of dispMsg. This comment is done just to notice the reader of the code that dispMsg() is actually updateDisplay().
	var target = document.getElementById("taMain");
	target.value = message + "\n\n" + target.value;
}

function dispMsgSecond(message) { //Function dispMsgSecond(message) takes in a parameter and it displays the message given as input plus the Score in the Second text area.
	var target = document.getElementById("taSecond");
	target.value = message + "\n\n" + target.value;
}

function navigationError() { //function navigationError() takes no parameter. If the value of navigation errors variable is higher than the value of the variable sarcasmThreshold, the 'game' gets "sassy".
	navigationErrorCount = navigationErrorCount + 1; //Every time the player does a mistake, the amount of navigation errors increases by 1.
	if (navigationErrorCount < sarcasmThreshold) {
		dispMsg("You cannot go that way.\nYou are still in the " + locArray[currLoc].name + ".\n\n");
	} else {
		dispMsg("Are you even trying, noob?\nYou are still in the " + locArray[currLoc].name +".\n\n");
	}            
}

			
function stageOne () { //stageOne() takes no parameter. It is the first stage in the CompLab. The correct answer is 007.
	var playerinput = document.getElementById("txtCommand").value;
	if (playerinput === "" || playerinput === "e" || playerinput === "E") {
		dispMsg("First Question:\n\nWhat is James Bond's favorite number?\n[Type your answer in the Command Box \nand click on 'Go']\n\n");
	}else {
		if (playerinput === "007") {
			dispMsg("You got the first question correct.\n\nNow type the sequence shown:\nY - Y - N - N - Y -\n Y - N - Y - N \n- Y - N - Y - Y - Y - N\n[Type the sequence in the Command Box, deleting the '-'. Then press 'Go'.\n\n\n");
			completeStage=1;
		} else {
			gameOver+=1;
			dispMsg("Wrong try again.\nWhat is James Bond's favorite number?\n\n\n\n\n\n");
			Over();
		}
	}
}

function stageTwo () { //stageTwo() takes no parameter. It is the second stage in the CompLab. The correct answer is YYNNYYNYNYNYYYN.
	alert('stagetwo');
	var playerinput = document.getElementById("txtCommand").value;
	if (playerinput === "" || playerinput === "e" || playerinput === "E" || playerinput === "007") {
		dispMsg("Type the sequence shown:\nY - Y - N - N - Y - Y - N - Y - N - Y - N - Y - Y - Y - N\n\n\n");
	}
	if (playerinput === "YYNNYYNYNYNYYYN") {
		dispMsg("That's correct.\n\nI saw that you are an interesting player. I want you to be free and be able to get out of here. You can either leave now or stay and complete the final stage to achieve the ultimate knowledge. If you decide to continue you won't be able to leave until you get the correct answer. Do you want to keep going?\n\n\n");
		document.getElementById("txtCommandTwo").disabled = false;
		completeStage=2;
		alert("win two");
	} else {
		alert("lost two");
		gameOver+=1;
		dispMsg("Wrong try again.\n\n\n");
		Over();
	}
}

function stageThree () { //stageThree() takes no parameter. It is the third stage in the CompLab. If the player says yes, it goes to stageFour().
	alert('stagethree');
	var playerinput = document.getElementById("txtCommand").value;
	if (playerinput === "" || playerinput === "e" || playerinput === "E" || playerinput === "YYNNYYNYN") {
		dispMsg("I saw that you are an interesting player. I want you to be free and be able to get out of here. You can either go out now or stay and do the final stage to achieve the ultimate knowledge. Do you want to keep going?");
	}
	if (completeStage===2) {
		completeStage=3;
		dispMsg("Here is the final challenge.\nThere is a castle with a guard in front of the main gate. You want to get in, but you don't know the password and you hide behind a bush.\n A guy comes and the guard says '12', the guy replies '6' and he gets in. Another guy comes and the guard says '6', the guy replies '3' and he gets in. You go to the guard, he says '4', you say '2' and he shoots you. What should you have said? ");
	} else {
		gameOver+=1;
		dispMsg("Wrong try again.\n\n\n");
		Over();
	}
}

function stageFour () { //stageFour() takes no parameter. It is the four stage in the CompLab. The correct answer is 4, or four, or Four.
	alert('stagefour');
	var playerinput = document.getElementById("txtCommand").value;
	if (playerinput === "" || playerinput === "e" || playerinput === "E" || playerinput === "YYNNYYNYNYNYYYN") {
		dispMsg("Here is the final challenge.\nThere is a castle with a guard in front of the main gate. You want to get in, but you don't know the password and you hide behind a bush.\n A guy comes and the guard says '12', the guy replies '6' and he gets in. Another guy comes and the guard says '6', the guy replies '3' and he gets in. You go to the guard, he says '4', you say '2' and he shoots you. What should you have said? ");
		completeStage=3;
	} else {
		if (playerinput === "4" || playerinput === "four" || playerinput === "Four") {
			dispMsg("That's correct.\n\n\n");
			bag = bag + rune;
			dispMsgSecond("You obtained the Rune. Click on\n the button 'Rune' to read it.");
			document.getElementById("Rune").disabled=false;
			completeStage=4;
			navigation(2);
		} else {
			alert("lost four");
			gameOver+=1;
			dispMsg("Wrong try again.\n\n\n");
			Over();
		}
	}
}

function btnGo_click() { //function btnGo_click() takes no parameter. It is used to input in the program what the player is typing in the command box.
	var playerinput = document.getElementById("txtCommand").value;
	if (locArray[currLoc].id === 10) {
		alert("go: " + completeStage);
		if (completeStage===0) {
			stageOne();
			document.getElementById("North").disabled = true;
			document.getElementById("South").disabled = true;
			document.getElementById("West").disabled = true;
			document.getElementById("East").disabled = true;
			document.getElementById("txtCommandTwo").disabled = true;
		} else {
				if (completeStage===1) {
					stageTwo();
				} else {
					if (completeStage===2) {
						stageThree();
					} else {
						if (completeStage===3) {
							alert('final if ' + completeStage);
							stageFour();
						}
					}
				}
		}
	} else {
		if ( (playerinput === "n") || (playerinput ==="N") ) {
			goNorth();
		} else {
			if ( (playerinput === "s") || (playerinput ==="S") ) {
			goSouth();
			} else {
				if ( (playerinput === "w") || (playerinput ==="W") ) {
					goWest();
				} else {
					if ( (playerinput === "e") || (playerinput ==="E") ) {
						goEast();
					} else {
						dispMsg("Invalid input. Try n - s - w - e");
					}
			  }
			}	
		}		 
}
}

function txtCommand_keyPress(keyboardEvent){ //function txtCommand_keyPress(keyboardEvent) takes a parameter as input. Depending on the number associated to the key pressed it will refer it to a function. It is a sort of KeyBinding present in many games. It takes in consideration both capital and lower case letters.
	if(currLoc != 3 && keyboardEvent.which === 119 || keyboardEvent.which === 87) {//(W) North key	
		goNorth();
	}
	if(currLoc != 3 && keyboardEvent.which === 115 || keyboardEvent.which === 83) {//(S) South key
		goSouth();
	}
	if(currLoc != 3 && keyboardEvent.which === 97 || keyboardEvent.which === 65) {//(A) West key
		goWest();
	}
	if(currLoc != 3 && keyboardEvent.which === 100 || keyboardEvent.which === 68) {//(D) East key
		goEast();
	}
	if(keyboardEvent.which === 32) {//Space key
		search();
	}
	if(keyboardEvent.which === 114 || keyboardEvent.which === 82) {//Take key
		take();
	}
	if(keyboardEvent.which === 120 || keyboardEvent.which === 88) {//Inventory key
		inventory();
	}
	if(keyboardEvent.which === 99 || keyboardEvent.which === 67) {//Scroll key	
		Scroll();
	}
	if(keyboardEvent.which === 121 || keyboardEvent.which === 89) {//Yes key	
		Yes();
	}
	if(keyboardEvent.which === 110 || keyboardEvent.which === 78) {//No key	
		No();
	}


}

function Rune () { //Rune() takes no parameter. It displays in the second Text Area the description of the item Rune.
	dispMsgSecond(rune.description);
}
var understandScroll=-1;
function Scroll () { //Scroll() takes no parameter. It displays in the Text Area the description of the Scroll.
	scrollUp();
	if (understandScroll===3) {
		dispMsg("The scroll says: ''Guided by the light. Air is sacred, five is freedom.''");
	}
	if (understandScroll===2) {
		dispMsg("One more time. It has to make sense.\nThe scroll says: ''Guided by the light. Air is sacred, five is freedom.''");
		understandScroll+=1;
	}
	if (understandScroll===1) {
		dispMsg("I have to concentrate.\nThe scroll says: ''Arbij by the nozim. Rarmi is sacred, five laj jey.''\nMhm...");	
		understandScroll+=1;
	}
	if (understandScroll===0) {
		dispMsg("The scroll says: ''Arbij narim the nozim. Rarmi laj nozau, 5 laj jey.''\nI don't really get it...");
		understandScroll+=1;
	}
}

var decision="";
function Yes() { //Yes() takes no parameter. It is linked to the button Yes. It has different utility depending on where the player currently is.
	scrollUp();
	decision="yes";
	if (locArray[currLoc].id === 10) {
		if (completeStage===-1) {
			completeStage=0;
			dispMsg("First Question:\n\nWhat is James Bond's favorite number?\n[Type your answer in the Command Box \nand click on 'Go']\n\n");
		} else {
			if (completeStage===2) {
				stageFour();
			}
		}
	}
	if ((locArray[currLoc].id === 6 || locArray[currLoc].id === 8) && (understandScroll===-1)) {
		dispMsg("woosh...");
	} else {
		if (currLoc===8) {
			dispMsg("A dog starts barking, it is against the window on the wall to the right");
			dogLoc=8;
		}
		if (currLoc===6) {
			dispMsg("You feel lighter... Almost as if you are a ghost. Random emotions pop into your head. The strongest one is arachnophobia. ");
			ghost=true;
		}
	}
}

function No() { //No() takes no parameter. It is linked to the button No. It has different utility depending on where the player currently is.
	scrollUp();
	decision="no";
	if (locArray[currLoc].id === 10) {
		navigation(2);
	}
	if ((locArray[currLoc].id === 6 || locArray[currLoc].id === 8) && (understandScroll===-1)) {
		dispMsg("woosh...");
	} else {
		if (currLoc===8) {
			dispMsg("Ok, keep your stealthy research and be quiet.");
			dogLoc=3;
		}
		if (currLoc===6) {
			dispMsg("Ok, keep your stealthy research and be quiet.");
			ghost=false;
		}
	}
}

function GhostDeath() { //GhostDeath() takes no parameter. It calls the function Over(), when the game is over.
	Over();
}

function scrollUp () { //ScrollUp() takes no parameter. It scrolls up both Text Areas when something is displayed.
	var textarea = document.getElementById("taMain");
	var textareaScnd = document.getElementById("taSecond");
	textarea.scrollTop = 0;
	textareaScnd.scrollTop = 0;
}

function checkScore() { //Function checkScore() takes no parameter. It checks if the player has ever been in a room before. If he/she has not, the function adds 5 points to the score.
	 if ( (! countzero) && (currLoc === 0) ) {            
		  score = score + 5;
		  countzero = true;
	} else if ( (! countone) && (currLoc === 1) ) {            
		  score = score + 5;
		  countone = true;
	} else if ( (! counttwo) && (currLoc === 2) ) {            
		  score = score + 5;
		  counttwo = true;
	} else if ( (! countthree) && (currLoc === 3) ) {            
		  score = score + 5;
		  countthree = true;
	} else if ( (! countfour) && (currLoc === 4) ) {            
		  score = score + 5;
		  countfour = true;
	} else if ( (! countfive) && (currLoc === 5) ) {            
		  score = score + 5;
		  countfive = true;
	} else if ( (! countsix) && (currLoc === 6) ) {            
		  score = score + 5;
		  countsix = true;
	} else if ( (! countseven) && (currLoc === 7) ) {            
		  score = score + 5;
		  countseven = true;
	} else if ( (! counteight) && (currLoc === 8) ) {            
		  score = score + 5;
		  counteight = true;
	} else if ( (! countnine) && (currLoc === 9) ) {            
		  score = score + 5;
		  countnine = true;
	}
}         

function search(){ //search() takes no parameter. It searches the item in the current room.
	scrollUp();
	if (locArray[currLoc].item != undefined) {
		dispMsg("Searched: " + locArray[currLoc].item);
	} else {
		dispMsg("There is nothing to search");
	}
}

function take() {// take() function takes no parameter. It is used to pick up the item in the room the player is in. It adds the item to the bag (inventory).
	scrollUp();
	if (locArray[currLoc].item != "No items." && locArray[currLoc].item != undefined){
		itemCount+=1;
		bag = bag + locArray[currLoc].item + "\n"; //The Project5 asks me to change the way the Items are added to the Inventory by using the .push, but I do not like how it is shown in the textarea when I display the Inventory. So I just used the + to add the item. If I wanted to use the array I should have used ' bag.push(locArray[currLoc].item); '
	    dispMsg("Taken: " + locArray[currLoc].item);
	    if (locArray[currLoc].item.name === " Scroll") {
			dispMsg("You obtained the Scroll. Click on the button 'Scroll' to read it.");
			document.getElementById("Scroll").disabled=false;
			understandScroll=0;
		}
		delete locArray[currLoc].item;
	} else {
		dispMsg("There is nothing to take.");
	}
	if (currLoc===3){
		score += 5;
	}
}

function inventory(){ //inventory() takes no parameter. It displays bag (the actual inventory) in the second textarea.
	scrollUp();
	if (bag.length === 0){
		dispMsgSecond("There are no items in your Inventory.");
	} else{
	dispMsgSecond("Inventory: \n" + bag);
	}
}