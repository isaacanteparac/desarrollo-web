const util = {};

util.tuple = (array, bool = true) => {
  if (bool) {
    return `(${array.join(", ")})`;
  } else {
    return `'${array.join("','")}'`;
  }
};

util.keysValues = (table, arrayString_ = {}, arrayNumber_ = {}) => {
  const concat = Object.keys(arrayString_).concat(Object.keys(arrayNumber_));
  const keysTupla = util.tuple(concat);
  const valuesString = util.tuple(Object.values(arrayString_), false);
  const valuesNumber = Object.values(arrayNumber_);
  let newQuery;
  if (
    Object.keys(arrayNumber_).length > 0 &&
    Object.keys(arrayString_).length > 0
  ) {
    newQuery = `INSERT INTO ${table} ${keysTupla} VALUES (${valuesString},${valuesNumber})`;
  } else if (Object.keys(arrayString_).length === 0) {
    newQuery = `INSERT INTO ${table} ${keysTupla} VALUES (${valuesNumber})`;
  } else {
    newQuery = `INSERT INTO ${table} ${keysTupla} VALUES (${valuesString})`;
  }

  return newQuery;
};

module.exports = util;
