import {
  parseInteger, error,
} from '../helpers/helpers';
import pool from '../db/index';

/**
 * Processes all product data
 * @exports
 * @class ProductController
 */

class ProductController {
  /**
   *
   * @description get all products
   * @static method
   * @param {object} request - Request object
   * @param {object} response - Reponse object
   * @returns {json} response.json
   * @memberOf ProductControllers
   */

  static allProducts(request, response) {
    pool.query('SELECT * FROM products ORDER BY id ASC', (err, result) => {
      if (err) {
        return response.status(500).json({
          message: 'cannot connect to database',
          err,
        });
      }

      if (result.rowCount > 0) {
        const getAllProducts = result.rows;

        return response.status(200).json({
          message: 'List of all products',
          getAllProducts,
        });
      }

      return response.status(404).json({
        message: 'no products found',
        err,
      });
    });
  }

  /**
   *
   * @description get a products by the user/admin
   * @static method
   * @param {object} request - Request object
   * @param {object} response - Reponse object
   * @returns {json} response.json
   * @memberOf ProductControllers
   */
  static getAProduct(request, response) {
    const { id } = request.params;

    const parseId = parseInteger(id);

    // check if id is a number
    if (!(Number.isInteger(parseId))) {
      return error(response, 404, 'The product id must be an integer');
    }

    pool.query('SELECT * FROM products WHERE id = $1', [id], (err, result) => {
      if (err) {
        return response.status(500).json({
          message: 'cannot connect to database',
          err,
        });
      }

      if (result.rowCount > 0) {
        const oneProduct = result.rows;

        return response.status(200).json({
          message: 'found product',
          oneProduct,
        });
      }

      return response.status(404).json({
        message: 'no product found',
        err,
      });
    });

    return null;
  }

  /**
   *
   * @description create a product by the admin
   * @static method
   * @param {object} request - Request object
   * @param {object} response - Reponse object
   * @returns {json} response.json
   * @memberOf ProductControllers
   */
  static createProduct(request, response) {
    const {
      productname, price, quantity, minquantity, createat,
    } = request.body;

    pool.query(
      'INSERT INTO products(productname, price, quantity, minquantity, createat) VALUES($1, $2, $3, $4, $5)',
      [productname, price, quantity, minquantity, createat],
      (err, result) => {
        if (err) {
          return response.status(500).json({
            message: 'cannot connect to database',
            err,
          });
        }

        if (result) {
          return response.status(200).json({
            message: 'product was created',
          });
        }

        return null;
      },
    );
  }

  /**
   *
   * @description update a product
   * @static method
   * @param {object} request - Request object
   * @param {object} response - Reponse object
   * @returns {json} response.json
   * @memberOf ProductControllers
   */
  static updateProduct(request, response) {
    const { id } = request.params;

    const parseId = parseInteger(id);

    // check if id is a number
    if (!(Number.isInteger(parseId))) {
      return error(response, 404, 'Please make sure it is an integer');
    }

    const {
      productname, price, quantity, createat,
    } = request.body;

    pool.query('UPDATE products SET productname = ($1), price = ($2), quantity = ($3), createat = ($4) WHERE id = ($5)', [productname, price, quantity, createat, id], (err, result) => {
      if (err) {
        return response.status(500).json({
          message: 'cannot connect to database',
          err,
        });
      }

      if (result) {
        if (result.rowCount > 0) {
          return response.status(200).json({
            message: 'product was updated successfully',
          });
        }

        return response.status(400).json({
          message: 'product id does not exist',
        });
      }

      return null;
    });

    return null;
  }

  /**
   *
   * @description delete a product
   * @static method
   * @param {object} request - Request object
   * @param {object} response - Reponse object
   * @returns {json} response.json
   * @memberOf ProductControllers
   */
  static deleteAProduct(request, response) {
    const { id } = request.params;

    const parseId = parseInteger(id);

    // check if id is a number
    if (!(Number.isInteger(parseId))) {
      return error(response, 404, 'Please make sure it is an integer');
    }

    pool.query('DELETE FROM products WHERE id = ($1)', [id], (err, result) => {
      if (err) {
        return response.status(500).json({
          message: 'cannot connect to database',
          err,
        });
      }

      if (result) {
        if (result.rowCount > 0) {
          return response.status(200).json({
            message: 'product was delete successfully',
          });
        }

        return response.status(400).json({
          message: 'product id does not exist',
        });
      }

      return null;
    });

    return null;
  }
}

export default ProductController;
