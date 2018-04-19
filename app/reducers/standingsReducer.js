import { YEAR_SELECTED } from '../actions/standings';

const initialState = {
  selectedYear: '2016',
  standings: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case YEAR_SELECTED:
      return { ...state, selectedYear: action.year };
    default:
      return state;
  }
}

/*
Standings reducer
Store standings on the store as keys with the season iD OR the YEAR (is unique among seasons standings)
SUCH AS
Store {
  selectedYear: 2016,
  standings {
    58dd9a81-4a38-4a66-8cd7-32ae4d567ba8: { * DATA HERE * },
    28dc9c24-9a24-9ac6-cc29-4c2ecd947b2c: { * DATA HERE * }
  }
}
*/
