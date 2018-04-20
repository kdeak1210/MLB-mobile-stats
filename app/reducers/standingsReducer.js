import {
  YEAR_SELECTED,
  REQUEST_STANDINGS,
  RECEIVE_STANDINGS
} from '../actions/standings';

const initialState = {
  isLoading: false,
  selectedYear: '2017',
  standingsMap: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case YEAR_SELECTED:
      return { ...state, selectedYear: action.year };
    case REQUEST_STANDINGS:
      // return { ...state, isLoading: true }
      return state;
    case RECEIVE_STANDINGS: {
      const { year, payload } = action;
      return {
        ...state,
        standingsMap: {
          ...state.standingsMap,
          [year]: payload
        }
      };
    }
    default:
      return state;
  }
}

/*
Standings reducer
Store standings on the store as keys with YEAR (is unique among seasons standings)
SUCH AS
Store {
  isLoading: false
  selectedYear: 2016,
  standings {
    2016: { * DATA HERE * },
    2015: { * DATA HERE * }
  }
}
*/
