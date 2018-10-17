import DataModel from '../models/DataModel';

const DataModel = {
  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} productData object
   */
  create(request, response) {
    if (!request.body.productID && !request.body.productName && !request.body.price) {
      return response.status(400).json({
        message: 'All fields are required',
      });
    }
  }
}

