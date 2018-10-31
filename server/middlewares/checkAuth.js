import jwt from 'jsonwebtoken';

export const isAdmin = (request, response, next) => {
  try {
    const getToken = request.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(getToken);

    if (decoded.data.role !== 'admin') {
      return response.status(401).json({
        message: 'you are not authorized',
      });
    }

    next();
  } catch (error) {
    return response.status(401).json({
      message: 'Auth failed',
    });
  }
  return null;
};

export const isUser = (request, response, next) => {
  try {
    const getToken = request.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(getToken);

    if (decoded.data.role !== 'user') {
      return response.status(401).json({
        message: 'you are not authorized',
      });
    }

    next();
  } catch (error) {
    return response.status(401).json({
      message: 'Auth failed',
    });
  }
  return null;
};
