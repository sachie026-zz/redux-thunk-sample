import { createSelector } from "reselect";

const getCount = state => state.count;

export const getCountState = createSelector( [getCount] , (count) => count > 3);