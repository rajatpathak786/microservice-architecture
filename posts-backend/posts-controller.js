const { getAllProducts, addProduct } = require("./posts-service");

const getProducts = (req, res) => {
  const response = getAllProducts();
  res.status(200).json(response);
};

// const getProduct = ((req, res) => {
//     const id = Number(req.params.productID)
//     const product = products.find(product => product.id === id)

//         if (!product) {
//         return res.status(404).send('Product not found')
//     }
//     res.json(product)
// })

const createProduct = (req, res) => {
  const response = addProduct(req.body);
  res.status(201).json(response);
};

// const updateProduct = ((req, res) => {
//     const id = Number(req.params.productID)
//     const index = products.findIndex(product => product.id === id)
//     const updatedProduct = {
//         id: products[index].id,
//         name: req.body.name,
//         price: req.body.price
//     }

//     products[index] = updatedProduct
//     res.status(200).json('Product updated')
// })

// const deleteProduct = ((req, res) => {
//     const id = Number(req.params.productID)
//     const index = products.findIndex(product => product.id === id)
//     products.splice(index,1)
//     res.status(200).json('Product deleted')
// })

module.exports = {
  getProducts,
  // getProduct,
  createProduct,
  // updateProduct,
  // deleteProduct
};
