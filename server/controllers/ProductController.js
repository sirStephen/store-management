import ProductModel from '../models/ProductModel';

const ProductController = {
  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} productData object
   */
  create(request, response) {
    if (!request.params.productID && !request.body.productName && !request.body.price) {
      return response.status(400).json({
        message: 'All fields are required',
      });
    }

    const product = ProductModel.create(request.body);
    return response.status(201).send(product);
  },

  /**
   * @param {object} request
   * @param {object} response
   * @returns {object} products array
   */
  getAllProducts(request, response) {
    const products = ProductModel.getAllProducts();
    return response.status(200).json(products);
  },

  getOneProduct(request, response) {
    const product = ProductModel.getOneProduct(request.params.productID);

    if (!product) {
      return response.status(404).json({
        message: 'product not found',
      });
    }

    return response.status(200).json(product);
  },

  /**
   * @param {object} request
   * @param {object} response
   * @returns {object} update product
   */
  updateProduct(response, request) {
    const product = ProductModel.getOneProduct(request.params.productID);

    if (!product) {
      return response.status(404).json({
        message: 'product not found',
      });
    }

    const updatedProduct = ProductModel.updateProduct(request.params.productID,
      request.body.productName, request.body.price);

    return response.status(200).json(updatedProduct);
  },

  delete(request, response) {
    const product = ProductModel.getOneProduct(request.params.productID);

    if (!product) {
      return response.status(404).json({
        message: 'product not found',
      });
    }

    const deleteProduct = ProductModel.delete(request.params.productID);

    return response.status(204).json(deleteProduct);
  },
};

export default ProductController;
