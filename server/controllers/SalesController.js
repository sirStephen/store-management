import salesDb from '../dummy-data/salesDb';
import {
  success, parseInteger, error, find, isValid,
} from '../helpers/helpers';

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
    return (salesDb.length > 0) && success(response, 200, 'All sales', salesDb);
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
    let saleDetails = '';

    // check if id is a number
    if (!(Number.isInteger(parseId))) {
      return error(response, 404, 'The sale id should be an integer');
    }

    saleDetails = find(salesDb, parseId);
    // if sale is found
    if (saleDetails) {
      return success(response, 200, 'Found the sale record', saleDetails);
    }

    return error(response, 404, 'The sale record does not exist');
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
    const sale = request.body;

    // if sale is valid
    if (isValid(sale)) {
      salesDb.push({
        id: salesDb.length + 1,
        ...sale,
        time: new Date(),
      });

      return success(response, 201, 'A sale was made');
    }

    return error(response, 400, 'Please enter the missing fields');
  }
}

export default SalesController;
