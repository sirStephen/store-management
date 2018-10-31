import jwt from 'jsonwebtoken';

const token = (req, res, next) => {
  const authToken = req.headers.authorization.split(' ')[1];
  if (!authToken) {
    return res.status(400).json({
      message: 'invalid token',
    });
  }

  jwt.verify(authToken, 'secret', (err, decoded) => {
    if (err) {
      return res.status(200).json({
        message: 'valid token',
      });
    }

    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    next();

    return null;
  });

  return null;
};

export default token;
