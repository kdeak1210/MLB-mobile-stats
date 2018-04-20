import API_KEY from '../config/sportradar';
import { arrayFromStandings } from '../utils/teams';

export const YEAR_SELECTED = 'YEAR_SELECTED';
export function yearSelected(year) {
  return {
    type: YEAR_SELECTED,
    year
  };
}

export const REQUEST_STANDINGS = 'REQUEST_STANDINGS';
function requestStandings() {
  return {
    type: REQUEST_STANDINGS
  };
}

export const RECEIVE_STANDINGS = 'RECEIVE_STANDINGS';
function receiveStandings(json, year) {
  return {
    type: RECEIVE_STANDINGS,
    payload: arrayFromStandings(json),
    year
  };
}

// THUNK action creators can return functions, passing dispatch method as args
export function fetchStandings(year) {
  return function(dispatch) {
    // Update app state that API call began
    dispatch(requestStandings());
    return fetch(
      `http://api.sportradar.us/mlb/trial/v6.5/en/seasons/${year}/REG/standings.json?api_key=${API_KEY}`
    )
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        // Update the app state with the results of the API call
        dispatch(receiveStandings(json, year))
      );
  };
}
