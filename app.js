// for(var i = 0; i < 20; i++){
//     console.log('rabbana hablana min ajwajina wa jurriya tina kurrata aiwun');
// }

// const friends = ["loneliness", "awkwardness", "nervousness", "depression"];

// for(var i = 0; i < friends.length; i++){
//     var element = friends[i];
//     console.log(element);
// }
// var human = {
//     name: "Noushad",
//     age: 23,
//     friends: ["loneliness", "awkwardness", "nervousness", "depression"],
//     country: "Bangladesh",
//     girlfriend: "Protibondir girlfriend hoa na",
//     wife: {
//         name: "really??",
//         age: "LOL",
//         edu: "tor baper matha"
//     }
// };

// console.log(human.friends[3]);

// for(let i = 0; i < human.friends.length; i++){
//     var element = human.friends[i];
//     console.log(element);
// }

// function rahim(){
//     console.log("hoo bhai");
// }

// rahim();

// function sum(num1, num2){
//     var result = (num1 + num2);
//     return result;
// }
// var totalSum = sum(10, 20);

// function minus(num1, num2){
//     var result = (num1 - num2);
//     return result;
// }
// var totalMinus = minus(30, 20);

// var answer = totalSum * totalMinus;
// console.log(answer);

// function kmToMiles(km) {
//   const result = km * 0.62;
//   return result;
// }
// const miles = kmToMiles(12);
// console.log(parseFloat(miles.toFixed(2)));



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
        console.log("Fitness doesn't matter mentality does");
    }
}

var workoutPlan = workout("-_-");
console.log(workoutPlan);