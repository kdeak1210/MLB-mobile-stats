// import API_KEY from '../config/sportradar';

export const YEAR_SELECTED = 'YEAR_SELECTED';
export function yearSelected(year) {
  return {
    type: YEAR_SELECTED,
    year
  };
}
