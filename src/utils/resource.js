/**
 * Normalize fetched `list` of resources from the server to a `Map<prop, item>`.
 */
export const normalizeByProp = (prop, list) => {
  return list.reduce((map, item) => {
    map[item[prop]] = item;
    return map;
  }, {});
};