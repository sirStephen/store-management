import pool from '../db/index';
import { parseInteger, error } from '../helpers/helpers';

/**
 * processes all sales data
 * @exports
 * @class SalesController
 */

class SalesController {
  /**
   *
   * @description get all sales
   * @staticmethod
   * @param {object} request - Request object
   * @param {object} response - Reponse object
   * @returns {json} response.json
   * @memberOf SalesControllers
   */
  static allSales(request, response) {
    pool.query('SELECT * FROM sales ORDER BY id ASC', (err, result) => {
      if (err) {
        return response.status(500).json({
          message: 'cannot connect to database',
          err,
        });
      }

      if (result.rowCount > 0) {
        const getAllProducts = result.rows;

        return response.status(200).json({
          message: 'List of all sales',
          getAllProducts,
        });
      }

      return response.status(404).json({
        message: 'no sale found',
        err,
      });
    });
  }

  /**
   *
   * @description get a sales
   * @staticmethod
   * @param {object} request - Request object
   * @param {object} response - Reponse object
   * @returns {json} response.json
   * @memberOf SalesControllers
   */
  static getASale(request, response) {
    const { id } = request.params;

    const parseId = parseInteger(id);

    // check if id is a number
    if (!(Number.isInteger(parseId))) {
      return error(response, 404, 'The sale id should be an integer');
    }

    pool.query('SELECT * FROM sales WHERE id = $1', [id], (err, result) => {
      if (err) {
        return response.status(500).json({
          message: 'cannot connect to database',
          err,
        });
      }

      if (result.rowCount > 0) {
        const oneProduct = result.rows;

        return response.status(200).json({
          message: 'found sale',
          oneProduct,
        });
      }

      return response.status(404).json({
        message: 'no sale found',
        err,
      });
    });

    return null;
  }

  /**
   *
   * @description create a sale
   * @staticmethod
   * @param {object} request - Request object
   * @param {object} response - Reponse object
   * @returns {json} response.json
   * @memberOf SalesControllers
   */
  static createSale(request, response) {
    const {
      productname, price, quantity, total, createat,
    } = request.body;

    pool.query('SELECT * FROM products WHERE productname = $1', [productname], (err, result) => {
      if (err) {
        return response.status(500).json({
          message: 'error in connecting to database',
          err,
        });
      }

      if (!result.rowCount) {
        return response.status(400).json({
          message: 'product does not exist',
        });
      }

      pool.query(
        'INSERT INTO sales(productname, price, quantity, total, createat) VALUES($1, $2, $3, $4, $5)',
        [productname, price, quantity, total, createat],
        (e) => {
          if (e) {
            return response.status(500).json({
              message: 'cannot connect to database',
              err,
            });
          }

          return response.status(200).json({
            message: 'sale was created',
          });
        },
      );

      return null;
    });
  }
}

export default SalesController;
