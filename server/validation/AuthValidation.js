class AuthValidation {
  static isSignupDetailsValid(request, response, next) {
    const {
      firstname, lastname, username, password, role,
    } = request.body;

    if (password.length < 6) {
      return response.status(400).json({
        message: 'your password should be more than 6 characters',
      });
    }

    if (firstname === '' || lastname === '' || username === '' || password === '' || role === '') {
      return response.status(400).json({
        message: 'ensure all fields are completely filled',
      });
    }

    if ((typeof firstname) !== 'string' || (typeof lastname) !== 'string') {
      return response.status(400).json({
        message: 'ensure firstname and lastname are strings',
      });
    }

    next();

    return null;
  }

  static isLoginDetailsValid(request, response, next) {
    const { username, password } = request.body;

    if (username === '' || password === '') {
      return response.status(400).json({
        message: 'ensure all fields are completely filled',
      });
    }

    if (password.length < 6) {
      return response.status(400).json({
        message: 'your password should be more than 6 characters',
      });
    }

    next();

    return null;
  }
}

export default AuthValidation;
