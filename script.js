const apiKey = '6b6d64cee3b28347ac2bcf9249459402';
const appId = '494da15a';

fetch(`https://api.nutritionix.com/v1_1/search?q=banana&appId=${appId}&appKey=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

