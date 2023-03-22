const apiKey = '6b6d64cee3b28347ac2bcf9249459402';
const appId = '494da15a';

fetch(`https://api.nutritionix.com/v1_1/search?q=banana&appId=${appId}&appKey=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));





//Edamame api call
var appedaKey = '105529a2d8de6085befbd5a16256cdce';
var appeda_Id = '0474cd6f';



//sample fetch request for asparagus weight of 100 from edamam
fetch('https://api.edamam.com/api/nutrition-data?app_id=' + appeda_Id + '&app_key=' + appedaKey + '&ingr=asparagus&weight=100', {
  method: 'GET', //GET is the default.
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  }); 

  // Functions for targets BMR mike
  
  let baseBMR = 2000;
let targetBMR = [];
let weightLossOrFatBurn = false;
let weightSameOrTone = false;
let weightGain = true;

if(weightLossOrFatBurn = true) {
    targetBMR = baseBMR - 20%baseBMR;
    return targetBMR;
}

if(weightSameOrTone = true) {
    targetBMR = baseBMR;
    return targetBMR;
}

if(weightGain = true){
    targetBMR = baseBMR + 20%baseBMR;
    return targetBMR;
}

console.log(targetBMR);