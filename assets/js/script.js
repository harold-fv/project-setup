// const apiKey = '6b6d64cee3b28347ac2bcf9249459402';
// const appId = '494da15a';

// fetch(`https://api.nutritionix.com/v1_1/search?q=banana&appId=${appId}&appKey=${apiKey}`)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));



// //Edamame api call, edited to utilize Food Database
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
//   }); 
// }

let energyCals = 0;
let proteinCals = 0;
let carbCals = 0;
let fatCals = 0;

let query = document.getelementbyid
//Edamame api call
var appedaKey = '105529a2d8de6085befbd5a16256cdce';
var appeda_Id = '0474cd6f';
//sample fetch request for asparagus weight of 100 from edamam
fetch('https://api.edamam.com/api/food-database/v2/parser?app_id=' + appeda_Id + '&app_key=' + appedaKey + '&ingr=asparagus', {
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
  });




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



// // User Submits info BMR is shown
// var bmrForm = document.getElementById('bmrCalcForm');

// bmrForm.addEventListener('submit', function(event) {
//   event.preventDefault();  
    
//   var genderSelect = document.getElementsByName('gender')[0]; 
//   var selectedGender = genderSelect.value; 
    
//   if (selectedGender === 'male') {
//     getMenBmr(); // call the getMenBmr function
//   } else if (selectedGender === 'female') {
//     getWomenBmr(); // call the getWomenBmr function
//   } else {
//     console.log('Please select a gender'); // handle the case where no gender is selected
//   }
// });

// function getMenBmr() {
//   var inputWeight = document.getElementById('weightKg').value;
//   var inputheight = document.getElementById('heightMeters').value;
//   var inputAge = document.getElementById('ageYears').value;

//   var weight = inputWeight * 13.7;
//   var height = inputheight * 100 * 5;
//   var ageInYears = inputAge * 6.8;

//   var bmrSubmitMen = 66 + weight + height - ageInYears;
//   console.log(bmrSubmitMen);
//   displayBmr.innerText = 'Great your BMR calculation was ' + bmrSubmitMen
  
// }

// function getWomenBmr() {
//   var inputWeight = document.getElementById('weightKg').value;
//   var inputheight = document.getElementById('heightMeters').value;
//   var inputAge = document.getElementById('ageYears').value;

//   var weight = inputWeight * 9.6;
//   var height = inputheight * 100 * 1.8;
//   var ageInYears = inputAge * 4.7;

//   var bmrSubmitWomen = 655 + weight + height - ageInYears;

//   console.log(bmrSubmitWomen);
//   displayBmr.innerText = 'Great your BMR calculation was ' + bmrSubmitWomen
// }


// // Display  BMR 
// var displayBmr = document.getElementById('displayBmr')



//   // Functions for targets BMR mike
  
//   let baseBMR = 2000;
// let targetBMR = [];
// let weightLossOrFatBurn = false;
// let weightSameOrTone = false;
// let weightGain = true;

// if(weightLossOrFatBurn = true) {
//     targetBMR = baseBMR - 20%baseBMR;
//     return targetBMR;
// }

// if(weightSameOrTone = true) {
//     targetBMR = baseBMR;
//     return targetBMR;
// }

// if(weightGain = true){
//     targetBMR = baseBMR + 20%baseBMR;
//     return targetBMR;
// }

// console.log(targetBMR);

