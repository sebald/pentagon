/** Actions */
export const FETCH_DOMAINS = 'Domain::FETCH_DOMAINS';
export const FETCH_DOMAINS_SUCCESS = 'Domain::FETCH_DOMAINS_SUCCESS';
export const FETCH_DOMAINS_ERROR = 'Domain::FETCH_DOMAINS_ERROR';

/** Action Creator */
export const fetchDomains = () => ({ type:FETCH_DOMAINS });
export const domainsFetched = (domains) => ({ type:FETCH_DOMAINS_SUCCESS, domains });
export const domainFetchingError = (error) => ({ type:FETCH_DOMAINS_SUCCESS, error });