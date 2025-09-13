let a = Math.random()
let b = null
function RPS(a){
    if (a<0.333){
        return b = "Scissor"
    }
    else if (a>0.333 && a<0.666){
        return b =  "Rock"
    }
    else{
        return b = "Paper"
    }
}
RPS(a)
console.log("Computer input : ",b)

let c = prompt("Enter Rock,Paper,Scissor :")

 
console.log("User input :",c)

function start(){
    if (c == b){
        console.log("Both are equal run it again")
    }
    else if ((c == "scissor" && b == "Rock") || (c == "Rock" && b == "Paper") || (c == "Paper" && b == "Scissor")){
        console.log("Computer have won the game")
    }
    else if((c == "Rock" && b == "Scissor") || (c == "Paper" && b == "Rock") || (c == "Scissor" && b == "Paper")){
        console.log("User have won the game")
    }
    else{
        console.log("Please Enter the valid input")
    }
}

start()