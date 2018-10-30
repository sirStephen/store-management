const admin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(401).json({
      message: 'you are not authorized',
    });
  }
  next();

  return null;
};

export default admin;
