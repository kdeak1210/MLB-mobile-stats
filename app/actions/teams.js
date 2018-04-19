import API_KEY from '../config/sportradar';
import { extractSeasonalStats } from '../utils/stats';

export const REQUEST_TEAM_STATS = 'REQUEST_TEAM_STATS';
function requestTeamStats() {
  return {
    type: REQUEST_TEAM_STATS
  };
}

export const RECEIVE_TEAM_STATS = 'RECEIVE_TEAM_STATS';
function receiveTeamStats(json, teamId, year) {
  // console.log(json, teamId, year);
  return {
    type: RECEIVE_TEAM_STATS,
    payload: extractSeasonalStats(json),
    teamId,
    year
  };
}

// THUNK action creators can return functions, passing dispatch method as args
export function fetchTeamStats(teamId, year) {
  return function(dispatch) {
    console.log('Fetch from action');
    // Dispatch to update app state that API call is starting
    dispatch(requestTeamStats());

    return fetch(
      `http://api.sportradar.us/mlb/trial/v6.5/en/seasons/${year}/REG/teams/${teamId}/statistics.json?api_key=${API_KEY}`
    )
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        // Update the app state with the results of the API call
        dispatch(receiveTeamStats(json, teamId, year))
      );
  };
}
