class SaleValidation {
  static isCreateSaleValid(request, response, next) {
    const {
      productname, price, quantity, total,
    } = request.body;

    if (quantity <= 0) {
      return response.status(400).json({
        message: 'please specify quantity',
      });
    }

    if (total <= 0) {
      return response.status(400).json({
        message: 'please specify amount',
      });
    }

    if (productname === '' || price === '' || quantity === '' || total === '') {
      return response.status(400).json({
        message: 'ensure all fields are completely filled',
      });
    }

    if ((typeof productname) !== 'string') {
      return response.status(400).json({
        message: 'product name must be a string',
      });
    }

    if ((typeof quantity) !== 'number' || (typeof price) !== 'number' || (typeof total) !== 'number') {
      return response.status(400).json({
        message: 'value must be an integer',
      });
    }

    next();

    return null;
  }
}

export default SaleValidation;
