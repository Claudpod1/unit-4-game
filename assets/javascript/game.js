 //global variables 
var wins = 0;
var losses = 0; 
var targetScore = "";
var yourScore = "";
var crystalOptions = {
    crystal1:"red" , 
    crystal2:"blue", 
    crystal3:"green",
    crystal4:"yellow",
}

for (var i = 0; i < 4; i++){
    var crystal = $("<div>");
    $(".crystals").append(crystal);
}

console.log(crystal);

//var randomNum=  generateRandom(); 


//var score = your score + crystalValue;
// array of crystals object ( toloop through )


//dynamically create crystals on the page 
// each crystal needs a score, an image ( aka a strinf holding the path to the image which is saved in a folder in your folder), an object with all of this info ( aka key value pairs )


// Randome Number Function : eg function generateRandom()


//something with math......
// assign a value for each crystal 
// return a random number 


// click event function 
//each crystal should have the same class so that you dont need 4 seperate click events. 

// start/reset - 
// clear variables 
//set target score 
// assign a value for each crystal /// .empty
// if yourScore is greater than target score then 
//if yourScore is less than, then ...
// compare to score 