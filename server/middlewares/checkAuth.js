import jwt from 'jsonwebtoken';

const token = (request, response, next) => {
  try {
    const getToken = request.headers.authorization.split(' ')[1];
    console.log(getToken);
    const decoded = jwt.decode(getToken);
    console.log(decoded.data.role);

    if (decoded.data.role !== 'admin') {
      return response.status(201).json({
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

export default token;
