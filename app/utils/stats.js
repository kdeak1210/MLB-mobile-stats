/* eslint-disable no-use-before-define */

/**
 * Given a SportRadar Seasonal Statistics API response, returns an object
 * with keys holding curated lists of stats for each category (hitting,
 * pitching, fielding)
 *
 */
export const extractSeasonalStats = seasonalStats => {
  const { hitting, pitching, fielding } = seasonalStats.statistics;

  return {
    hitting: extractHittingStats(hitting),
    pitching: extractPitchingStats(pitching),
    fielding: extractFieldingStats(fielding)
  };
};

export const extractHittingStats = hitting => {
  const { overall } = hitting;
  const { ab, lob, rbi, slg, avg, onbase: { s, d, t, hr } } = overall;

  const trimmedStats = [
    { name: 'Average', value: avg },
    { name: 'At Bats', value: ab },
    { name: 'RBI', value: rbi },
    { name: 'Slugging', value: slg },
    { name: 'Singles', value: s },
    { name: 'Doubles', value: d },
    { name: 'Triples', value: t },
    { name: 'Home Runs', value: hr },
    { name: 'Left on Base', value: lob }
  ];

  return trimmedStats;
};

export const extractPitchingStats = pitching => {
  const { overall } = pitching;
  const {
    pitch_count,
    outcome: { ktotal: strikes, klook, kswing, ball },
    outs: { ktotal: strikeouts },
    runs: { earned, unearned },
    games: { save }
  } = overall;

  const trimmedStats = [
    { name: 'Total Pitches', value: pitch_count },
    { name: 'Total Stikes', value: strikes },
    { name: 'K Looking', value: klook },
    { name: 'K Swinging', value: kswing },
    { name: 'Balls', value: ball },
    { name: 'Strikeouts', value: strikeouts },
    { name: 'Earned Runs', value: earned },
    { name: 'Unearned Runs', value: unearned },
    { name: 'Saves', value: save }
  ];

  return trimmedStats;
};

export const extractFieldingStats = fielding => {
  const { overall } = fielding;
  const { po, a, dp, tp, error, tc, fpct } = overall;

  const trimmedStats = [
    { name: 'Putouts', value: po },
    { name: 'Assists', value: a },
    { name: 'Double Plays', value: dp },
    { name: 'Triple Plays', value: tp },
    { name: 'Errors', value: error },
    { name: 'Total Chances', value: tc },
    { name: 'Fielding %', value: fpct }
  ];

  return trimmedStats;
};
