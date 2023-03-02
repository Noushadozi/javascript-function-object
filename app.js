for(var i = 0; i < 20; i++){
    console.log('rabbana hablana min ajwajina wa jurriya tina kurrata aiwun');
}

const friends = ["loneliness", "awkwardness", "nervousness", "depression"];

for(var i = 0; i < friends.length; i++){
    var element = friends[i];
    console.log(element);
}
var human = {
    name: "Noushad",
    age: 23,
    friends: ["loneliness", "awkwardness", "nervousness", "depression"],
    country: "Bangladesh",
    girlfriend: "Protibondir girlfriend hoa na",
    wife: {
        name: "really??",
        age: "LOL",
        edu: "tor baper matha"
    }
};

console.log(human.friends[3]);

for(let i = 0; i < human.friends.length; i++){
    var element = human.friends[i];
    console.log(element);
}

function rahim(){
    console.log("hoo bhai");
}

rahim();

function sum(num1, num2){
    var result = (num1 + num2);
    return result;
}
var totalSum = sum(10, 20);

function minus(num1, num2){
    var result = (num1 - num2);
    return result;
}
var totalMinus = minus(30, 20);

var answer = totalSum * totalMinus;
console.log(answer);

function kmToMiles(km) {
  const result = km * 0.62;
  return result;
}
const miles = kmToMiles(12);
console.log(parseFloat(miles.toFixed(2)));



function workout(workoutName){
    var bicepWorkout = ["cable cross", "bicep"];
    var chestWorkout = ["chest fly", "chest press"];
    if(workoutName == "chest"){
        return chestWorkout;
    }
    else if(workoutName == "bicep"){
        return bicepWorkout;
    }
    else{
        return "Fitness doesn't matter mentality does";
    }
}

var workoutPlan = workout("-_-");
console.log(workoutPlan);




var firstToTenDays = 500;
var second11To20Days = 300;
var third21to30days = 100;

function cost(myDays){
    if(myDays <= 10){
        var totalCost = myDays * 500;
        return totalCost;
    }
    else if(myDays <= 20 && myDays >= 10){
        var first10 = 500 * 10; 
        var remaining = 300 * (myDays - 10);
        var total = first10 + remaining;
        return total;
    }
    else{
        var first10 = 500 * 10; 
        var second10 = 300 * 10; 
        var remaining = 300 * (myDays - 20);
        var total = first10 + second10 + remaining;
        return total;
    }
}
const totalCost = cost(29);
console.log(totalCost);