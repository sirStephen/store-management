import salesDb from '../dummy-data/salesDb';
import {
  success, parsedInt, error, find, isValid,
} from '../helpers/productHelpers';

/**
 * processes all sales data
 * @class SalesController
 */

class SalesController {
  /**
   * @returns {Object} array of sales
   */
  static allSales(request, response) {
    return (salesDb.length > 0) && success(response, 200, 'All sales', salesDb);
  }

  static getASale(request, response) {
    const { id } = request.params;

    const parseId = parsedInt(id);
    let saleDetails = '';

    // check if id is a number
    if (!(Number.isInteger(parseId))) {
      return error(response, 404, 'The sale id does not exist');
    }

    saleDetails = find(salesDb, parseId);
    // if sale is found
    if (saleDetails) {
      return success(response, 200, 'Found the sale record', saleDetails);
    }

    return error(response, 404, 'The sale record does not exist');
  }

  static createSale(request, response) {
    const sale = request.body;

    // if sale is valid
    if (isValid(sale)) {
      salesDb.push({
        id: salesDb.length + 1,
        ...sale,
        time: new Date(),
      });

      return success(response, 201, 'A sale was made', salesDb);
    }

    return error(response, 400, 'Please enter the missing fields');
  }
}

export default SalesController;
