// Sort the teams DESC on win_p property (win percentage from SportRadar API)
export const compareTeams = (team1, team2) => {
  if (team1.win_p < team2.win_p) {
    return 1;
  }
  if (team1.win_p > team2.win_p) {
    return -1;
  }
  return 0;
};

// Flatten a standings response from SportsRadar into an array of teams, then sort on win_p
export const arrayFromStandings = standings => {
  const teamsArr = [];
  standings.league.season.leagues.forEach(league => {
    league.divisions.forEach(division => {
      teamsArr.push(...division.teams);
    });
  });

  teamsArr.sort(compareTeams);

  return teamsArr;
};
