/** Actions */
export const FETCH_GROUPS = 'Groups::FETCH_GROUPS';
export const FETCH_GROUPS_SUCCESS = 'Groups::FETCH_GROUPS_SUCCESS';
export const FETCH_GROUPS_ERROR = 'Groups::FETCH_GROUPS_ERROR';

/** Action Creator */
export const fetchGroups = () => ({ type:FETCH_GROUPS });
export const groupsFetched = (groups) => ({ type:FETCH_GROUPS_SUCCESS, groups });
export const groupFetchingError = (error) => ({ type:FETCH_GROUPS_SUCCESS, error });