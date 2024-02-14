const products = [];

const getAllProducts = () => {
  return products;
};

const addProduct = (req) => {
  const product = {
    id: products.length + 1,
    title: req.title,
  };
  products.push(product);
  return product;
};

module.exports = { getAllProducts, addProduct };
