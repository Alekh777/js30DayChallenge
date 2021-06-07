const endpoint =
  "https://gist.githubusercontent.com/Alekh777/5eb853fe1ddeaf5d67cd4c91a9b8c603/raw/c0d94f52eff90a913b323029b8cf6ccedb8fbac3/cities.json";

let cities = [];

fetch(endpoint)
  .then(data => data.json())
  .then(d => cities.push(...d));

function findMatches(wordToSearch, cities){
  return cities.filter(place => {
    const regex = new RegExp(wordToSearch, 'gi');
    return place.city.match(regex) || place.country.match(regex);
  })
}

function displayMatches(){
  if(this.value == '' || this.value.length == 1) {
    suggestions.innerHTML = `
    <li>Filter for a City</li>
        <li>or Country</li>
      `;
    return;
  }
    const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const countryName = place.country.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
    <li>
      <span class="name">${cityName}, ${countryName}</span>
      <span class="population">${place.population}</span>
     </li>`;
  }).join('');
  suggestions.innerHTML = html;
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);