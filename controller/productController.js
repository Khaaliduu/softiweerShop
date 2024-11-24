import Product from "./../models/productsModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, category, image, description, price, oldPrice, countInStock } =
      req.body;

    const product = await Product.create({
      name,
      category,
      image,
      description,
      price,
      oldPrice,
      countInStock,
    });
    if (product) {
      res.status(201).json(product);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateProduct = async (req, res) => {
    try {
      const { name, category, image, description, price, oldPrice, countInStock } =
        req.body;

        const product = await Product.findById(req.params.id);

        if (product) {
            product.name = name
            product.category= category
            product.image = image
            product.description = description
            product.price = price
           product.oldPrice = oldPrice
           product.countInStock = countInStock

           const updatedProduct = await product.save()
           if (updatedProduct) {
            res.status(200).json(updatedProduct);
          }
            
        }else{
            res.status(404).json({mesaage:"product not found"});
        }
  
      
      
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };


  export const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (product) {
        res.status(200).json({message: "Product deleted!"});
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };