class ProductModel {
  /**
   * class constructor
   * @params {object} productData
   */
  constructor() {
    this.productmodels = [];
  }

  /**
  *
  * @returns {object} productData object
  */

  create(productData) {
    const newProductData = {
      productID: productData.productID,
      productName: productData.productName,
      price: productData.price,
    };
    this.productmodels.push(newProductData);
    return newProductData;
  }

  /**
  *
  * @param id
  * @returns {object} productData object
  */
  getOneProduct(productID) {
    return this.productmodels.find(product => product.productID === productID);
  }

  /**
   * @returns {object} return all products
   */
  getAllProducts() {
    return this.productmodels;
  }

  /**
   * @param productID
   * @param {object} productData
   */
  updateProduct(productID, productData) {
    const product = this.getOneProduct(productID);
    const index = this.productmodels.indexOf(product);

    this.productmodels[index].productName = productData.productName || product.productName;
    this.productmodels[index].price = productData.price || product.price;

    return this.productmodels[index];
  }

  /**
   * @param {productID}
   */
  delete(productID) {
    const product = this.getOneProduct(productID);
    const index = this.productmodels.indexOf(product);
    this.productmodels.splice(index, 1);
    return {};
  }
}

export default new ProductModel();
