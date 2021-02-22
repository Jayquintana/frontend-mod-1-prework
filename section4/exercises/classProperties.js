/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
constructor(){

}
      }


var paws = new Dog("Big Paws");
var teeth = new Dog("Sharp Teeth");
console.log(paws);
console.log(teeth);
console.log(Dog);

// Prompt 2: Snack
class Snack {
  constructor(){
  }
}
var taste = new Snack("sweet");
var penut = new Snack('Penut Butter');
console.log(Snack);
console.log(taste);
console.log(penut);
// Prompt 3: Shirt

class Shirt {
constructor() {

  }
}
var color = new Shirt('Black');
var sleeve = new Shirt('Long Sleeve');
console.log(Shirt);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Puppy {
  constructor() {
    this.age = 1;
    this.canBark = true;
    this.name = "Fluffy"
      }
    }
    var paws = new Puppy("Small Paws");
    console.log(paws);
    console.log(Puppy);

console.log(Dog);
// Prompt 2: Snack
class Candy {
  constructor(){
    this.type = "Reeses";
    this.hasPenuts = true;
    this.pieces = 12
  }
}
var texture = new Candy("Is Crunchy");
console.log(Candy);
console.log(texture);
// Prompt 3: Shirt
class ConcertShirt {
constructor() {
  this.typeShirt = "Short sleeve";
  this.isComfy = true;
  this.graphic = "N.E.R.D"

  }
}
var color = new ConcertShirt("Black");
console.log(ConcertShirt);
console.log(color);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class  BigDog {
  constructor(adult, pawSize, pupsName) {
    this.age = adult;
    this.paws = pawSize;
    this.name = pupsName;
      }
    }
    var striped = new BigDog("Black Stripes");
    var appetite = new BigDog('A very hungry dog');
    var bladder = new BigDog('Has to pee');

    console.log(BigDog);
    console.log(striped);
    console.log(appetite);
    console.log(bladder);




// Prompt 2: Snack
class Chips {
  constructor(chipShape, plain, chipAmount){
    this.shape = chipShape;
    this.flavor = plain;
    this.amount = chipAmount;
  }
}
var bbq = new Chips("BBQ flavor");
var cheese = new Chips ('Doritos')
var plain = new Chips ("Tortilla Chips")
console.log(Candy);
console.log(bbq);
console.log(cheese);
console.log(plain);



// Prompt 3: Shirt
class Jersey {
constructor(footBall, playerNumber,playerName) {
  this.teamType = footBall;
  this.number = playerNumber;
  this.name = playerName

  }
}
var color = new Jersey("Yellow");
var material = new Jersey ("Nylon");
var team = new Jersey("Nuggets")

console.log(Jersey);
console.log(color);
console.log(material);
console.log(team);
