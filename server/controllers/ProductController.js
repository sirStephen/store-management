import productDb from '../dummy-data/productDb';

import {
  parsedInt, success, error, find, isValid,
} from '../helpers/helpers';

/**
 * Processes all product data
 * @class ProductController
 */

class ProductController {
  /**
   * @returns {Object} Array of products
   */

  static allProducts(request, response) {
    return (productDb.length > 0) && success(response, 200, 'All products', productDb);
  }

  /**
   * @returns {Object} get a product
   */

  static getAProduct(request, response) {
    const { id } = request.params;

    const parsedId = parsedInt(id);
    let productDetails = '';

    // check if id is a number
    if (!(Number.isInteger(parsedId))) {
      return error(response, 404, 'The product id does not exist');
    }

    productDetails = find(productDb, parsedId);
    // if product is found
    if (productDetails) {
      return success(response, 200, 'Found the product', productDetails);
    }

    return error(response, 404, 'The product does not exist');
  }

  /**
   * @returns {Object} update array of products
   */
  static createProduct(request, response) {
    const product = request.body;

    // if product is valid
    if (isValid(product)) {
      productDb.push({
        id: productDb.length + 1,
        ...product,
      });
      return success(response, 201, 'New product was created', productDb);
    }
    return error(response, 400, 'Please enter the missing fields');
  }

  /**
   * @param {id}
   */
  static deleteAProduct(request, response) {
    const { id } = request.params;

    const parsedId = parsedInt(id);

    // check if id is a number
    if (!(Number.isInteger(parsedId))) {
      return error(response, 404, 'The product id does not exist');
    }

    // if product is found
    productDb.forEach((product, index) => {
      if (product.id === parsedId) {
        productDb.splice(index, 1);
        return success(response, 204, 'This product is delete', productDb);
      }

      // return error(response, 404, 'An error occurred');
    });

    return error(response, 404, 'The product does not exist');
  }
}

export default ProductController;
