const response = {};

//const { loadAll } = require("./staticFile");

response.success = (req, res, data) => {
  return res.status(200).send({ body: data });
};

response.error = (req, res, error) => {
  return res.status(500).send({ error: error });
};

response.badReq = (req, res, message) => {
  return res.status(400).send({ badReq: message });
};

response.message = (req, res, message) => {
  return res.send({ message: message });
};

response.redirect = (req, res, url) => {
  return res.status(303).redirect(url);
};
/*
response.render = (req, res, url) => {
  loadAll;
  return res.render(url);
};*/

module.exports = response;
