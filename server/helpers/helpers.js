/* Check the id of every request to see whether it can be converted to number */
export const parseInteger = id => ((!(/^\d+$/.test(id))) ? NaN : parseInt(id, 10));

// when a request is successful
export const success = (response, statusCode, message, data) => response.status(statusCode)
  .json({ message, data });

// when a request has an error
export const error = (response, statusCode, message) => response.status(statusCode)
  .json({ message });

// find a product
export const find = (productArray, id) => productArray.find(product => (id === product.id));

export const isValid = (product) => {
  const productName = product.productName !== '';
  const price = (typeof (product.price) === 'number') && product.price > 0;

  return { productName, price };
};
