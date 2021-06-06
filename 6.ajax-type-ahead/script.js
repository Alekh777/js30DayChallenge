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