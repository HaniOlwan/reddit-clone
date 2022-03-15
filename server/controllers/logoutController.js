const logoutController = (req, res) => {
  res.clearCookie('token');
  res.status(401).json({ msg: 'Good bye' });
};

module.exports = logoutController;
