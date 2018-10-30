class ProductValidation {
  static isCreateProductValid(request, response, next) {
    const {
      productname, price, quantity, minquantity,
    } = request.body;

    if (minquantity < 3 || quantity < 3) {
      return response.status(400).json({
        message: 'ensure the minimum quantity or quantity is not less than 3',
      });
    }

    if (productname === '' || price === '' || quantity === '' || minquantity === '') {
      return response.status(400).json({
        message: 'ensure all fields are completely filled',
      });
    }

    if ((typeof productname) !== 'string') {
      return response.status(400).json({
        message: 'product name must be a string',
      });
    }

    if ((typeof quantity) !== 'number' || (typeof price) !== 'number' || (typeof minquantity) !== 'number') {
      return response.status(400).json({
        message: 'value must be an integer',
      });
    }

    next();

    return null;
  }

  static isUpdateProductValid(request, response, next) {
    const {
      productname, price, quantity,
    } = request.body;

    if (productname === '' || price === '' || quantity === '') {
      return response.status(400).json({
        message: 'ensure all fields are completely filled',
      });
    }

    if ((typeof productname) !== 'string') {
      return response.status(400).json({
        message: 'product name must be a string',
      });
    }

    if ((typeof quantity) !== 'number' || (typeof price) !== 'number') {
      return response.status(400).json({
        message: 'value must be an integer',
      });
    }

    next();

    return null;
  }
}

export default ProductValidation;
