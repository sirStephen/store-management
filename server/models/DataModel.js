class DataModel {
  /**
   * class constructor
   * @params {object} productData
   */
  constructor() {
    this.datamodels = [];
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
    this.datamodels.push(newProductData);
    return newProductData;
  }

  /**
  *
  * @param id
  * @returns {object} productData object
  */
  getOneProduct(productID) {
    return this.datamodels.find(product => product.productID === productID);
  }

  /**
   * @returns {object} return all products
   */
  getAllProducts() {
    return this.datamodels;
  }

  /**
   * @param productID
   * @param {object} productData
   */
  updateProduct(productID, productData) {
    const product = this.getOneProduct(productID);
    const index = this.datamodels.indexOf(product);

    this.datamodels[index].productName = productData.productName || product.productName;
    this.datamodels[index].price = productData.price || product.price;

    return this.datamodels[index];
  }

  /**
   * @param {productID}
   */
  delete(productID) {
    const product = this.findOne(productID);
    const index = this.datamodels.indexOf(product);
    this.datamodels.splice(index, 1);
    return {};
  }
}

export default new DataModel();
