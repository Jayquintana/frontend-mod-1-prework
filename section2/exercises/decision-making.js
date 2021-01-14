/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

    The if, else is setting up two options. If you choos #1 in the next console.logs the bear will wear a hat.
    If you choose anything else the bear will be wearing a scarf.

2. What variable has a new value assigned to it after the first if statement executes?

    After the fist if is executed, the bearClothing value changes to a hat.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

    The bearClothing would be a scarf because 3 does not strictly equal 1. So the else code executes and gives bearClothing
    a value of a scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

    The if statement is asking: if bearChoice is strictly equal to 1. Then execute first Console.log code.
    Then If not that, read second else if statement: if bearChoice is strictly equal to 2, if true execute second Console.log.
    if not either of those two, it reads second else if: If bearClothing is strictly equal to 3, if true execute third console.log.
    If none of those are true it goes to the last line of code to the else statement: if non are true execute fourth console.log.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

    if you change bearChoice to 3, it would execute else if statement: if bearChoice is strictly equal to 3.
    and consol.log ("You run as fast as you can into the next room. It's full of snakes!") is executed.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

    You tell the bear the hat is too small and it starts to cry!



7. What is your favorite ending?
You run as fast as you can into the next room. It's full of snakes!
*/
