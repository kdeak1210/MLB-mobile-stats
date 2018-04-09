import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import { Container } from '../components/Container';
import Images from '../assets/images';
import statistics from '../../mocks/blue-jays-2015.json';

const styles = StyleSheet.create({
  teamName: { fontSize: 22, color: '#fff', fontWeight: '800' },
  button: { alignItems: 'center', backgroundColor: '#DDD', padding: 10 }
});

class SeasonalStats extends Component {
  state = {
    showHitting: false
  };

  toggleHitting = () => {
    // console.log('Toggle Hitting');
    this.setState(prevState => ({ showHitting: !prevState.showHitting }));
  };

  render() {
    return (
      <Container>
        <Image source={Images[statistics.abbr]} />
        <Text style={styles.teamName}>
          {statistics.name} Stats for {statistics.season.year}
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.toggleHitting}>
          <Text>Toggle Hitting</Text>
        </TouchableOpacity>
        {this.state.showHitting && <Text>Hitting Stats</Text>}
      </Container>
    );
  }
}

export default SeasonalStats;

// {
//   "name": "Blue Jays",
//   "market": "Toronto",
//   "abbr": "TOR",
//   "id": "1d678440-b4b1-4954-9b39-70afb3ebbcfa",
//   "season": {
//     "id": "9523f039-070c-49d1-b2e3-5f18b57c5ee3",
//     "year": 2015,
//     "type": "REG"
//   },
//   "statistics": {
//     "hitting": {
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
//     },
//     "pitching": {
//       "overall": {
//         "oba": 0.248,
//         "lob": 2083,
//         "era": 3.81,
//         "k9": 6.975,
//         "whip": 1.2144,
//         "pitch_count": 22621,
//         "ip_1": 4323,
//         "ip_2": 1441,
//         "bf": 5984,
//         "gofo": 1.021,
//         "onbase": {
//           "s": 883,
//           "d": 267,
//           "t": 30,
//           "hr": 173,
//           "tb": 2199,
//           "bb": 377,
//           "ibb": 20,
//           "hbp": 59,
//           "fc": 0,
//           "roe": 0,
//           "h": 1353
//         },
//         "runs": {
//           "total": 670,
//           "unearned": 60,
//           "earned": 610
//         },
//         "outcome": {
//           "klook": 3773,
//           "kswing": 2340,
//           "ktotal": 6113,
//           "ball": 7394,
//           "iball": 59,
//           "dirtball": 409,
//           "foul": 4196
//         },
//         "outs": {
//           "po": 339,
//           "fo": 762,
//           "fidp": 1,
//           "lo": 411,
//           "lidp": 9,
//           "go": 1544,
//           "gidp": 128,
//           "klook": 294,
//           "kswing": 823,
//           "ktotal": 1117,
//           "sacfly": 49,
//           "sachit": 25
//         },
//         "steal": {
//           "caught": 41,
//           "stolen": 56,
//           "pickoff": 15
//         },
//         "games": {
//           "svo": 56,
//           "qstart": 85,
//           "shutout": 10,
//           "win": 93,
//           "loss": 69,
//           "save": 34,
//           "hold": 63,
//           "blown_save": 22
//         }
//       }
//     },
//     "fielding": {
//       "overall": {
//         "po": 4323,
//         "a": 1592,
//         "dp": 145,
//         "tp": 0,
//         "error": 88,
//         "tc": 6003,
//         "fpct": 0.985,
//         "errors": {
//           "throwing": 0,
//           "fielding": 0,
//           "interference": 0,
//           "total": 88
//         }
//       }
//     }
//   },
//   "players": [
//     {
//       "preferred_name": "Justin",
//       "first_name": "Justin",
//       "last_name": "Smoak",
//       "jersey_number": "14",
//       "id": "44c2a812-101d-4955-a3e5-3085afa9296b",
//       "position": "IF",
//       "primary_position": "1B",
//       "statistics": {
//         "hitting": {
//           "overall": {
//             "ab": 296,
//             "lob": 147,
//             "rbi": 59,
//             "abhr": 16.444,
//             "abk": 3.442,
//             "bip": 193,
//             "babip": 0.254,
//             "bbk": 0.337,
//             "bbpa": 0.088,
//             "iso": 0.244,
//             "obp": 0.299,
//             "ops": 0.769,
//             "seca": 0.341,
//             "slg": 0.47,
//             "xbh": 35,
//             "pitch_count": 1262,
//             "ap": 328,
//             "avg": ".226",
//             "gofo": 1.61,
//             "onbase": {
//               "s": 32,
//               "d": 16,
//               "t": 1,
//               "hr": 18,
//               "tb": 139,
//               "bb": 29,
//               "ibb": 0,
//               "hbp": 2,
//               "fc": 4,
//               "roe": 3,
//               "h": 67,
//               "cycle": 0
//             },
//             "runs": {
//               "total": 44
//             },
//             "outcome": {
//               "klook": 226,
//               "kswing": 157,
//               "ktotal": 383,
//               "ball": 466,
//               "iball": 0,
//               "dirtball": 31,
//               "foul": 169
//             },
//             "outs": {
//               "po": 10,
//               "fo": 32,
//               "fidp": 0,
//               "lo": 17,
//               "lidp": 0,
//               "go": 95,
//               "gidp": 10,
//               "klook": 19,
//               "kswing": 67,
//               "ktotal": 86,
//               "sacfly": 1,
//               "sachit": 0
//             },
//             "steal": {
//               "caught": 0,
//               "stolen": 0,
//               "pct": 0,
//               "pickoff": 0
//             },
//             "games": {
//               "start": 71,
//               "play": 132,
//               "finish": 59,
//               "complete": 65
//             }
//           }
//         },
//         "fielding": {
//           "overall": {
//             "po": 666,
//             "a": 44,
//             "dp": 74,
//             "tp": 0,
//             "error": 4,
//             "tc": 714,
//             "fpct": 0.994,
//             "rf": 6.455,
//             "errors": {
//               "throwing": 0,
//               "fielding": 0,
//               "interference": 0,
//               "total": 4
//             },
//             "games": {
//               "start": 71,
//               "play": 110,
//               "finish": 39,
//               "complete": 0
//             }
//           }
//         }
//       }
//     },
