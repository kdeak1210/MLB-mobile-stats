export const extractHittingStats = seasonalStats => {
  const { overall } = seasonalStats.statistics.hitting;
  const { ab, lob, rbi, avg, onbase: { s, d, t, hr } } = overall;

  const trimmedStats = [
    { name: 'Average', value: avg },
    { name: 'At Bats', value: ab },
    { name: 'RBI', value: rbi },
    { name: 'Singles', value: s },
    { name: 'Doubles', value: d },
    { name: 'Triples', value: t },
    { name: 'Home Runs', value: hr },
    { name: 'Left on Base', value: lob }
  ];

  return trimmedStats;
};

export const placeholder = () => {};

//       "overall": {
//         "ab": 5509,
//         "lob": 2249,
//         "rbi": 852,
//         "abhr": 23.746,
//         "abk": 4.786,
//         "bip": 4188,
//         "babip": 0.298,
//         "bbk": 0.495,
//         "bbpa": 0.091,
//         "iso": 0.188,
//         "obp": 0.34,
//         "ops": 0.797,
//         "seca": 0.304,
//         "slg": 0.457,
//         "xbh": 557,
//         "pitch_count": 24034,
//         "ap": 6232,
//         "avg": ".269",
//         "gofo": 1.24,
//         "onbase": {
//           "s": 923,
//           "d": 308,
//           "t": 17,
//           "hr": 232,
//           "tb": 2518,
//           "bb": 558,
//           "ibb": 12,
//           "hbp": 54,
//           "fc": 135,
//           "roe": 41,
//           "h": 1480,
//           "cycle": 0
//         },
//         "runs": {
//           "total": 891
//         },
//         "outcome": {
//           "klook": 4291,
//           "kswing": 2394,
//           "ktotal": 6685,
//           "ball": 8364,
//           "iball": 38,
//           "dirtball": 549,
//           "foul": 3901
//         },
//         "outs": {
//           "po": 351,
//           "fo": 703,
//           "fidp": 3,
//           "lo": 341,
//           "lidp": 11,
//           "go": 1724,
//           "gidp": 140,
//           "klook": 275,
//           "kswing": 876,
//           "ktotal": 1151,
//           "sacfly": 62,
//           "sachit": 36
//         },
//         "steal": {
//           "caught": 23,
//           "stolen": 88,
//           "pct": 0.793,
//           "pickoff": 7
//         }
//       }
