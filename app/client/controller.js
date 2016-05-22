var HttpStatus = require('http-status-codes');

exports.get = (req, res, next) =>
  res.json({id: req.params.id, name: 'Fabio!'});

exports.post = (req, res, next) => {

};
