
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

