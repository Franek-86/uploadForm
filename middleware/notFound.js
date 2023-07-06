const notFound = (req, res) => {
  res.status(404).send("this page does not exist");
};
module.exports = notFound;
