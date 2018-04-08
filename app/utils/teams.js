// compare two teams for sorting on Win % ('win_p' from SportsRadar API)
export const compareTeams = (team1, team2) => team1.win_p > team2.win_p;

// Flatten a standings response from SportsRadar into an array of teams
export const arrayFromStandings = standings => {
  const teamsArr = [];
  standings.league.season.leagues.forEach(league => {
    league.divisions.forEach(division => {
      teamsArr.push(...division.teams);
    });
  });

  return teamsArr;
};
