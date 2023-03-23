// // const apiKey = '6b6d64cee3b28347ac2bcf9249459402';
// // const appId = '494da15a';

// // fetch(`https://api.nutritionix.com/v1_1/search?q=banana&appId=${appId}&appKey=${apiKey}`)
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error(error));

// //Edamame api call
// var appedaKey = '105529a2d8de6085befbd5a16256cdce';
// var appeda_Id = '0474cd6f';


// //sample fetch request for asparagus weight of 100 from edamam
// fetch('https://api.edamam.com/api/nutrition-data?app_id=' + appeda_Id + '&app_key=' + appedaKey + '&ingr=asparagus&weight=100', {
//   method: 'GET', //GET is the default.
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   }); 



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