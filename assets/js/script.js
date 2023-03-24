
var nutrixInput = document.getElementById('nutrixInput')
var nutrixBtn = document.getElementById('nutrixBtn')
var nutrixResult = document.getElementById('nutrix_results')

nutrixBtn.addEventListener('click', getNutrixResults)

function getNutrixResults() {
  var apiKey = '6b6d64cee3b28347ac2bcf9249459402';
  var appId = '494da15a';
  var query = nutrixInput.value

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
  nutrixResult.innerHTML = html;
}
// // const apiKey = '6b6d64cee3b28347ac2bcf9249459402';
// // const appId = '494da15a';

// // fetch(`https://api.nutritionix.com/v1_1/search?q=banana&appId=${appId}&appKey=${apiKey}`)
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error(error));



//Shabab's Edamame api call, edited to utilize Food Database
//changed app keys and id to match Food Database API
var appedaKey = '96c9812e34d70f8817c3c0855d4ebb4a';
var appeda_Id = 'a230f40d';
var ingredients = document.getElementById("ingredient");
var submitBtn = document.getElementById("submitBmrBtn");

submitBtn.addEventListener('click', getResults);
function getResults(){

//sample fetch request
fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=' + appeda_Id + '&app_key=' + appedaKey + '&ingr=' + ingredients, {
  method: 'GET', //GET is the default.
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.calories); //console logging accessing calories from data response
  }); 
}
//created by harold
var bmr = 0;
var bmi = 0;
function bmrbmicalc() {
  var weight = Number(document.getElementById("weight").value);
  var height = Number(document.getElementById("height").value);
  var age = Number(document.getElementById("age").value);
  var gender = document.getElementById("gender").value;

  if (gender === 'male') {
    bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
  } else if (gender === 'female') {
    bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
  } else {
    document.getElementById("result").innerHTML = "Please select your gender.";
    return;
  }

  bmi = weight / (height ** 2);
  var resultString = `Your BMR is ${bmr.toFixed(2)} and your calories per day.<br>Your BMI is ${bmi.toFixed(2)}.`;
  document.getElementById("result").innerHTML = resultString;
return ;
}

// //This function will calculate the BMI by Harold
// function calculateBMI() {

//   //this will get the value of the weight and height 
//   var weight = (document.getElementById("weight").value);
//   var height = (document.getElementById("height").value);
  
//   //this will calculate the bmi and using "tofixed" to get only 1 decimal place
//   var bmi = weight / (height * height);
//   bmi = bmi.toFixed(1);
  
//   //this will send the output to the screen
//   var result = document.getElementById("result");
//   result.innerHTML = "Your BMI is " + bmi + "";
// }


//Edamame api call, edited to utilize Food Database
// //changed app keys and id to match Food Database API
// var appedaKey = '96c9812e34d70f8817c3c0855d4ebb4a';
// var appeda_Id = 'a230f40d';
// var ingredients = document.getElementById("ingredient");
// var submitBtn = document.getElementById("submitBmrBtn");

// submitBtn.addEventListener('click', getResults);
// function getResults(){

// //sample fetch request
// fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=' + appeda_Id + '&app_key=' + appedaKey + '&ingr=' + ingredients, {
//   method: 'GET', //GET is the default.
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     console.log(data.calories); //console logging accessing calories from data response
//     console.log(data.totalNutrientsKCal);
//   }); 
// }


//possible duplicate (extra console log)
var appedaKey = '96c9812e34d70f8817c3c0855d4ebb4a';
var appeda_Id = 'a230f40d';
var ingredients = document.getElementById("ingredient");
var submitBtn = document.getElementById("submitBmrBtn");

submitBtn.addEventListener('click', getResults);

function getResults() {
  //sample fetch request
  fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=' + appeda_Id + '&app_key=' + appedaKey + '&ingr=' + ingredients.value, {
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