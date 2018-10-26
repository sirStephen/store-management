import productDb from '../dummy-data/productDb';
import usersDb from '../dummy-data/usersDb';

import {
  parseInteger, success, error, find, isValid,
} from '../helpers/helpers';

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
    return (productDb.length > 0) && success(response, 200, 'All products', productDb);
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
    let productDetails = '';

    // check if id is a number
    if (!(Number.isInteger(parseId))) {
      return error(response, 404, 'The product id must be an integer');
    }

    productDetails = find(productDb, parseId);
    // if product is found
    if (productDetails) {
      return success(response, 200, 'Found the product', productDetails);
    }

    return error(response, 404, 'The product does not exist');
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
    let userObj = '';

    const { userId } = request.body;

    const parseUserId = parseInteger(userId);

    // check if userId is a number
    if (!(Number.isInteger(parseUserId))) {
      return error(response, 404, 'Please make sure it is an integer');
    }

    usersDb.map((user) => {
      if (user.userId === parseUserId) {
        userObj = user;
      }

      return null;
    });

    if (userObj.type !== 'admin') {
      return response.status(401).json({
        message: 'You are not authorized',
      });
    }

    const product = request.body;

    // if product is valid
    if (isValid(product)) {
      productDb.push({
        id: productDb.length + 1,
        ...product,
      });
      return success(response, 201, 'New product was created');
    }
    return error(response, 400, 'Please enter the missing fields');
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

    // if product is found
    productDb.forEach((product, index) => {
      if (product.id === parseId) {
        productDb.splice(index, 1);
      }

      return response.status(204).json({
        message: 'product was deleted',
      });
    });

    return error(response, 400, 'Sorry the product id does not exist');
  }
}

export default ProductController;
