$(function(){
    //ASSIGNING A VARIABLE TO AN ARRAY OF CHOICES
    let choices = ["rock", "paper", "scissors"];

    //WHEN ROCK BUTTON IS CLICKED
    $("#rock").click(function(){
        play("rock");
    });

    //WHEN PAPER BUTTON IS CLICKED
    $("#paper").click(function(){
        play("paper");
    });

    //WHEN SCISSORS BUTTON IS CLICKED
    $("#scissors").click(function(){
        play("scissors");
    });

    //WHEN USER IS PLAYING
    function play(playerResult){

        let computerResult = cResult(); 
        
        compare(playerResult, choices[computerResult]);
    }
    
    function cResult(){
        return Math.floor(Math.random()*3);
    }

    function compare(playerResult, computerResult){
        console.log(playerResult);
        console.log(computerResult);
        if(computerResult === choices[0] && playerResult === choices[0]){
            console.log("Draw");
            document.getElementById("message").innerHTML = "Draw";
        }
        else if(computerResult === choices[0] && playerResult === choices[1]){
            console.log("You Win");
            document.getElementById("message").innerHTML = "You Win";
        }
        else if(computerResult === choices[0] && playerResult === choices[2]){
            console.log("You Lose");
            document.getElementById("message").innerHTML = "You Lose";
        }

        else if(computerResult === choices[1] && playerResult === choices[0]){
            console.log("You Lose");
            document.getElementById("message").innerHTML = "You Lose";
        }

        else if(computerResult === choices[1] && playerResult === choices[1]){
            console.log("Draw");
            document.getElementById("message").innerHTML = "Draw";
        }

        else if(computerResult === choices[1] && playerResult === choices[2]){
            console.log("You Win");
            document.getElementById("message").innerHTML = "You Win";
        }

        else if(computerResult === choices[2] && playerResult === choices[0]){
            console.log("You Lose");
            document.getElementById("message").innerHTML = "You Lose";
        }

        else if(computerResult === choices[2] && playerResult === choices[1]){
            console.log("You Win");
            document.getElementById("message").innerHTML = "You Win";
        }

        else if(computerResult === choices[2] && playerResult === choices[2]){
            console.log("Draw");
            document.getElementById("message").innerHTML = "Draw";
        }
    }

});