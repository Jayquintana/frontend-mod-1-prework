var startFrogs = ["3", "2", "1"];
var endFrogs = ["then there were 2 speckled frogs.",
"then there was 1 speckled frog.",
"then there were no more speckled frogs!"];
var rhyme = " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool,"

for (var x = 0; x < startFrogs.length + endFrogs.length; x++) {

  console.log(startFrogs[x] + rhyme + endFrogs[x]);
}


// ##Required

var frogsIntro = ["10","9","8","7","6","5","4","3", "2", "1"];
var frogsEnd = ["then there were 9 speckled frogs.","then there were 8 speckled frogs.",
 "then there were 7 speckled frogs.", "then there were 6 speckled frogs.", "then there were 5 speckled frogs.",
 "then there were 4 speckled frogs.", "then there were 3 speckled frogs.", "then there were 2 speckled frogs.",
"then there were 1 speckled frogs.", "then there were no more speckled frogs!"];
var rhyme = " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool,"

for (var i = 0; i < frogsIntro.length + frogsEnd.length; i++) {

  console.log(frogsIntro[i] + rhyme + frogsEnd[i]);
}
