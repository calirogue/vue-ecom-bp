module.exports = function (req, res, next) {
  const body = {};
  [ "name", "description", "image", "type", "cbd", "thc", "effects", "flavor", "deleted"].forEach(prop => {
    if (req.body.hasOwnProperty(prop)) {
      body[prop] = req.body[prop];
    }
  });
  req.body = body;
  next();
};
