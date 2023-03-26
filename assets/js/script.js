//created by harold
var bmr = 0;
var bmi = 0;
function bmrbmicalc() {
  var weight = Number(document.getElementById("weight").value);
  var height = Number(document.getElementById("height").value);
  var age = Number(document.getElementById("age").value);
  var gender = document.getElementById("gender").value;
  var activityFactor = Number(document.getElementById("activity").value);
  var goal = document.getElementById("goal").value;
  if (gender === 'male') {
    bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
  } else if (gender === 'female') {
    bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
  } else {
    document.getElementById("result").innerHTML = "Please select your gender.";
    return;
  }
  bmi = weight / (height ** 2);
  var weightStatus = "";
  if (bmi < 18.5) {
      weightStatus = "underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
      weightStatus = "normal";
  } else {
      weightStatus = "overweight";
  }
  var recommendedCalories = bmr * activityFactor;
  var resultString = `Your BMR is ${bmr.toFixed(2)} calories per day.<br>
  Your BMI is ${bmi.toFixed(2)} (${weightStatus}).<br>Recommended daily calorie intake: ${recommendedCalories.toFixed(2)} calories.<br>`;
  document.getElementById("result2").innerHTML = resultString;
  displayFoodRecommendations(goal);
  return;
}
function displayFoodRecommendations(goal) {
  let foodRecommendations = `<p>Here are some food recommendations based on your fitness goal:</p>`;
  if (goal === "burnfat") {
      foodRecommendations = `
          <h3>Burn Fat:</h3>
          <ul>
              <li>Lean protein sources (e.g., chicken, turkey, fish, beans, tofu)</li>
              <li>Fiber-rich foods (e.g., vegetables, fruits, whole grains, legumes)</li>
              <li>Healthy fats (e.g., nuts, seeds, avocado, olive oil)</li>
              <li>Low-sugar and low-calorie foods</li>
              <li>Drink plenty of water to stay hydrated</li>
          </ul>
      `;
  } else if (goal === "tone") {
      foodRecommendations = `
          <h3>Tone:</h3>
          <ul>
              <li>Protein-rich foods (e.g., chicken, turkey, fish, beans, tofu, Greek yogurt)</li>
              <li>Complex carbohydrates (e.g., whole grains like brown rice, quinoa, whole wheat bread)</li>
              <li>Fiber-rich foods (e.g., vegetables, fruits, legumes)</li>
              <li>Healthy fats (e.g., nuts, seeds, avocado, olive oil)</li>
              <li>Stay hydrated by drinking plenty of water throughout the day</li>
          </ul>
      `;
  } else if (goal === "strengthtrain") {
      foodRecommendations = `
          <h3>Strength Train:</h3>
          <ul>
              <li>Protein-rich foods (e.g., chicken, turkey, fish, beans, tofu, Greek yogurt) to support muscle growth and repair.</li>
              <li>Complex carbohydrates (e.g., whole grains like brown rice, quinoa, whole wheat bread) for sustained energy during workouts.</li>
              <li>Healthy fats (e.g., nuts, seeds, avocado, olive oil) to support hormone production and provide energy for workouts.</li>
              <li>Fiber-rich foods (e.g., vegetables, fruits, legumes) to support digestion and keep you feeling full.</li>
              <li>Stay hydrated by drinking plenty of water throughout the day, especially before, during, and after workouts.</li>
          </ul>
      `;
  } else {
      document.getElementById("result").innerHTML = "<p>Please select a fitness goal.</p>";
      return;
  }
  document.getElementById("result").innerHTML = foodRecommendations;
}
//possible duplicate (extra console log)
var appedaKey = '96c9812e34d70f8817c3c0855d4ebb4a';
var appeda_Id = 'a230f40d';
var ingredients = document.getElementById("ingredient");
var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click', getResults);
function getResults() {
  //sample fetch request
  fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=' + appeda_Id + '&app_key=' + appedaKey + '&ingr=' + searchInput.value, {
    method: 'GET', //GET is the default.
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.calories); //console logging accessing calories from data response
      console.log(data.totalNutrientsKCal);
    });
}
//Created by mNova
var appedaKey = '96c9812e34d70f8817c3c0855d4ebb4a';
var appeda_Id = 'a230f40d';
var searchInput = document.getElementById("searchInput");
var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click', getEdamamResults);
let energyCals = 0;
let proteinCals = 0;
let carbCals = 0;
let fatCals = 0;
let meal = []
//created by Harold
let totalEnergyCal=0;
let totalproteinCals=0;
let totalcarbCals=0;
let totalfatCals=0;
function getEdamamResults() {
fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=' + appeda_Id + '&app_key=' + appedaKey + '&ingr=' + searchInput.value, {
  method: 'GET', //GET is the default.
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.parsed[0].food.nutrients);
    energyCals = data.parsed[0].food.nutrients.ENERC_KCAL;
    proteinCals = data.parsed[0].food.nutrients.PROCNT;
    carbCals = data.parsed[0].food.nutrients.FAT;
    fatCals = data.parsed[0].food.nutrients.PROCNT;
    var item = {
      food: data.text,
      energy: energyCals,
      protein: proteinCals,
      carbs: carbCals,
      fat: fatCals
    }
  console.log(energyCals,proteinCals,carbCals,fatCals)
  meal.push(item)
  console.log(meal)
  sumArray(meal)
    displayInfoResults(energyCals, proteinCals, carbCals, fatCals)
  });
}

//added by Harold. This will total the Calories 3/25
function addToTotalCard(){
  console.log("Inside addtoTotalCard");
  var divTotal = document.getElementById('totalCal');
 //created by Harold
 totalEnergyCal = totalEnergyCal + energyCals;
 totalproteinCals =  totalproteinCals + proteinCals;
 totalcarbCals = totalcarbCals + carbCals;
 totalfatCals =   totalfatCals + fatCals;

//added the total calories inside the function by harold 3/25
 divTotal.innerHTML = `
 <p>Total Energy Calories: ${totalEnergyCal}</p>
 <p>Total Protein Calories: ${ totalproteinCals}</p>
 <p>Total Carb Calories: ${ totalcarbCals}</p>
 <p>Total Fat Calories: ${ totalfatCals }</p>`
 console.log(divTotal);
;
}



function displayInfoResults(energyCals, proteinCals, carbCals, fatCals) {
  
  //added  by Harold.  <h2>${searchInput.value}</h2> and <button type="button" id="addFood">Add</button>  
  var divResults = document.getElementById('resultsArray')
  console.log(divResults);
  divResults.innerHTML = `
  <h2>${searchInput.value}</h2>
  <p>Energy Calories: ${energyCals}</p>
  <p>Protein Calories: ${proteinCals}</p>
  <p>Carb Calories: ${carbCals}</p>
  <p>Fat Calories: ${fatCals}</p>
  <button type="button" id="addFood">Add</button> 
`;

//added by Harold. This is to add the selected search food to the today calories
let addFoodEl = document.querySelector("#addFood");
addFoodEl.addEventListener("click", addToTotalCard)

//  var divTotal = document.getElementById('totalCal');
//  //created by Harold
//  totalEnergyCal = totalEnergyCal + energyCals;
//  totalproteinCals =  totalproteinCals + proteinCals;
//  totalcarbCals = totalcarbCals + carbCals;
//  totalfatCals =   totalfatCals + fatCals;
//  divTotal.innerHTML = `
//  <p>Total Energy Calories: ${totalEnergyCal}</p>
//  <p>Total Protein Calories: ${ totalproteinCals}</p>
//  <p>Total Carb Calories: ${ totalcarbCals}</p>
//  <p>Total Fat Calories: ${ totalfatCals }</p>`
;
}

//created by Harold. Clear button
var clearBtn = document.getElementById('clearBtn');
function clearResults() {
    var divResults = document.getElementById('resultsArray');
    divResults.innerHTML = '';
    var divTotal = document.getElementById('totalCal');
    divTotal.innerHTML = '';
}

clearBtn.addEventListener('click', clearResults);

  //created by aarellano
var searchInput = document.getElementById('searchInput')
var searchBtn = document.getElementById('searchBtn')
var searchResult = document.getElementById('searchResult')
searchBtn.addEventListener('click', getNutrixResults)
function getNutrixResults() {
  var apiKey = '6b6d64cee3b28347ac2bcf9249459402';
  var appId = '494da15a';
  var query = searchInput.value
  fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${query}`, {
    method: 'GET',
    headers: {
      'x-app-id': appId,
      'x-app-key': apiKey,
      'x-remote-user-id': '0',
    },
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Do something with the returned data
    foodName = data.common[0].food_name
    image = data.common[0].photo.thumb
    displayNutrix(image, foodName)
  })
  .catch((error) => {
    console.error(error);
  });
}
function displayNutrix(image, foodName) {
  let html = `<p>Food Name: ${foodName}</p>
              <img src="${image}">`;
              searchResult.innerHTML = html;
}
// by michael
function sumArray(resultsArray){
  let sum = 0 // the sum is initialed to 0
  for (let i = 0; i < resultsArray.length; i++) {
  // take every item in the array and add it to sum variable
  sum += resultsArray[i]
  // initial: sum = 0
  // iteration 1: 0 + 1 => sum = 1
  // iteration 2: 1 + 4 => sum = 5
  // iteration 3: 5 + 0 => sum = 5
  // iteration 4: 5 + 9 => sum = 14
  // iteration 5: 14 + -3 => sum = 11
  }
  console.log(sum) // 11
  // System.out.println("Sum value of array elements is : " + sum);
  // return sum
  return sum
}
var fitnessGoal = document.getElementById('fitnessGoal')
var fatBurn = document.getElementById('fatBurn')
var tone = document.getElementById('tone')
var strengthTrain = document.getElementById('strengthTrain')
var num = 0.2
fitnessGoal.addEventListener('change', function(){
// Fitness Goal Selection
targetBMR = 0
if (fitnessGoal.value == 'fatBurn'){
  targetBMR = bmr - num * bmr;
  console.log(targetBMR)
}
if (fitnessGoal.value == 'tone'){
  targetBMR = bmr;
  console.log(targetBMR)
}
if ( fitnessGoal.value == 'strengthTrain'){
  targetBMR = bmr + num * bmr;
  console.log(targetBMR)
}
})