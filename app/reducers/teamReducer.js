import { REQUEST_TEAM_STATS, RECEIVE_TEAM_STATS } from '../actions/teams';

const initialState = {
  isLoading: false,
  stats: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TEAM_STATS:
      // console.log('REQUEST_TEAM_STATS: ', action);
      // return { ...state, isLoading: true }
      return state;
    case RECEIVE_TEAM_STATS: {
      // console.log('RECEIVE_TEAM_STATS: ', action);
      const { teamId, year, payload } = action;
      return {
        ...state,
        // isLoading: false,
        stats: {
          ...state.stats,
          [teamId]: {
            [year]: payload
          }
        }
      };
    }
    default:
      return state;
  }
}

/*
Team reducer
Store teams on the store as keys with the team's ID, with each of those have keys as the year of the season

**** CONSIDER ADDING 'stats' field

SUCH AS
Store {
  team { 
    isLoading: false,
    stats: {
      44671792-dc02-4fdd-a5ad-f5f17edaa9d7: {
        2013: {
          hittingStats: [],
          fieldingStats: [],
          pitchingStats: []
        },
        2015: { * DATA HERE * },
        2016: { * DATA HERE * },      
      },
      481dfe7e-5dab-46ab-a49f-9dcc2b6e2cfd: {
        2016: { * DATA HERE * },
      },
      a7723160-10b7-4277-a309-d8dd95a8ae65: {
        2016: { * DATA HERE * },
        2017: { * DATA HERE * },
      }
    }
  }
}
*/
