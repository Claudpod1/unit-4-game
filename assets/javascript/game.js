//global variables

var crystal = {
    blue:
    { name: "blue",
     value: 0
    },
    red:
    {name: "red",
        value: 0
    },
    green:
    {name: "green",
        value: 0
    },
    yellow:
    {name: "yellow",
        value:0
    }
};

var wins = 0;
var losses = 0;

var targetScore = "";
var yourScore = "";
////var randomNum=  generateRandom(); 
// Randome Number Function : eg function generateRandom()



    var getRandom = function (min, max) {
        return Math.floor((Math.random() * max - min + 1) + min);
    };

    //start the game 
    var initGame = function () {
        currentScore = 0;
        targetNumber = getRandom(19, 120);
        console.log(targetNumber);
        $(".targetScore").html(targetNumber);
        $(".yourScore").html(currentScore);
    

    crystal.blue.value= getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value= getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    }

    //function to add the value of the crystals to the current score
    var crystalValue = function (crystal) {
        currentScore = currentScore + (crystal.value);
        $("#yourScore").html(currentScore);

        checkWins();
    }

    //check to see if you have matched the target score thereby winning ...else losing
    var checkWins = function () {
             if(currentScore > targetNumber){
                 alert("you lost");
                 losses++;
                 $("#lose").html(losses);
                 //restart game
                 initGame();
             }
         else if(currentScore === targetNumber){
            
             alert("you won");
             wins++;
             $("#win").html(wins);
             //restart game
             initGame();
             }

    };

    //restart game
    initGame();

    //on-click for the crystal images
    $("#blue").on("click", function () {
        crystalValue(crystal.blue);
        console.log(crystalValue);
    });

    $("#green").on("click", function () {
        crystalValue(crystal.green);
    });

    $("#red").on("click", function () {
        crystalValue(crystal.red);
    });

    $("#yellow").on("click", function () {
        crystalValue(crystal.yellow);
    }); 
    
