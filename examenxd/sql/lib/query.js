const { consultDB } = require("../database");
const { keysValues } = require("./util");
const query = {};

query.getAll = async (table) => {
  try {
    const result = await consultDB(`SELECT * FROM ${table}`);
    return result;
  } catch (e) {
    return "no data";
  }
};

query.getUnique = async (table, unique) => {
  try {
    const result = await consultDB(
      `SELECT * FROM ${table} WHERE ${unique.key} = '${unique.value}'`
    );
    return result;
  } catch (e) {
    return "no data";
  }
};

query.deleteId = async (table, id) => {
  try {
    await consultDB(`DELETE FROM ${table} WHERE  id = '${id}' `);
    return "removal successful";
  } catch (e) {
    return "no data";
  }
};

query.postData = async (table, arrayTypeString = {}, arrayTypeNumber = {}) => {
  try {
    const newData = keysValues(table, arrayTypeString, arrayTypeNumber);
    const resultId = await consultDB(`${newData}  RETURNING id`);
    return resultId;
  } catch (e) {
    return "no post";
  }
};

query.updateHouseData = async (o) => {
  try {
    const newData = `UPDATE info_house SET  id_rental = ${objectTypes.id_rental} WHERE id = '${objectTypes.id}' RETURNING id`;
    const resultId = await consultDB(newData);
    return resultId;
  } catch (e) {
    return "no post";
  }
};

module.exports = query;
