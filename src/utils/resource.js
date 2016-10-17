/**
 * Normalize fetched `list` of resources from the server to a `Map<fn(item), item>`.
 */
export const normalizeBy = (fn, list) => {
  return list.reduce((map, item) => {
    map[fn(item)] = item;
    return map;
  }, {});
};