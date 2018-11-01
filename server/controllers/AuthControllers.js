import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../db/index';

class AuthControllers {
  static signup(request, response) {
    const {
      firstname, lastname, username, password, role,
    } = request.body;
    console.log(request.body);
    pool.query('SELECT * FROM users WHERE username = $1', [username], (err, result) => {
      if (err) {
        return response.status(500).json({
          message: 'error in connecting to database',
          err,
        });
      }

      if (result.rowCount > 0) {
        return response.status(400).json({
          message: 'username already exist',
        });
      }

      const hashPassword = bcrypt.hashSync(password, 10);

      pool.query('INSERT INTO users("firstName", "lastName", username, password, role) VALUES($1, $2, $3, $4, $5)', [firstname, lastname, username, hashPassword, role], (error) => {
        if (error) {
          return response.status(500).json({
            message: 'error in creating account',
            err,
          });
        }

        return response.status(201).json({
          message: 'your account was created',
          result,
        });
      });

      return null;
    });
  }

  static login(request, response) {
    const { username, password } = request.body;

    pool.query('SELECT * FROM users WHERE username = $1', [username], (err, result) => {
      if (err) {
        return response.status(500).json({
          message: 'cannot connect to database',
          err,
        });
      }

      if (result.rowCount > 0) {
        // Load hash from your password DB.
        const isPassword = bcrypt.compareSync(password, result.rows[0].password);
        if (!isPassword) {
          return response.status(400).json({
            message: 'Invalid password',
          });
        }

        if (isPassword) {
          const token = jwt.sign({
            data: {
              id: result.rows[0].id,
              role: result.rows[0].role,
            },
          }, process.env.JWT_KEY, { expiresIn: 86400 });
          return response.status(200).json({
            message: 'you have successfully logged in',
            username: result.rows[0].username,
            firstname: result.rows[0].firstName,
            lastname: result.rows[0].lastName,
            role: result.rows[0].role,
            token,
          });
        }
      }

      return response.status(404).json({
        message: 'Could not find a user matching your request',
      });
    });
  }
}

export default AuthControllers;
