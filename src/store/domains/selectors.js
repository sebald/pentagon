export const getDomains = () => state => state.get('domains');

/**
 * For later reference:
 * ===========================
 *
 * import { createSelector } from 'reselect';
 *
 * export const getStateProp = () => state => state.get('domains');
 *
 * export const getDomains = () => createSelector(
 *    getStateProp(),
 *    domains => domains.toJS()
 * );
 */