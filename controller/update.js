const updateform = async (req, res) => {
  const data = req.query || req.body;
  const querydata = await Customer.findByPk(data.id);
  res.render("updateform", {
    data: {
      id: querydata.id,
      password: querydata.password,
      email: querydata.email,
      name: querydata.name,
    },
  });
};

module.exports = updateform;
