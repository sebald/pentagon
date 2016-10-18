import { createSelector } from 'reselect'

export const getGroups = () => state => state.get('groups');

export const getFilteredGroups = () => createSelector(
  (state, { domain_id }) => ({ group: getGroups()(state), domain_id }),
  ({ group, domain_id }) => group.filter(item => item.get('domain_id') === domain_id)
);