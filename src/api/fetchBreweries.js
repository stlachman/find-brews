export function fetchBreweries(state, type) {
  let url = "https://api.openbrewerydb.org/breweries?&per_page=35";
  if (state !== "All") {
    url += `&by_state=${state}`;
  }
  if (type !== "All") {
    url += `&by_type=${type}`;
  }
  return fetch(url).then(res => res.json());
}
