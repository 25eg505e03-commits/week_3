import express from 'express';
import { productModel } from './productModel.js';

// Create a dedicated router for product-related routes
export const productApp = express.Router();

// Route to create a new product entry in MongoDB
productApp.post('/product', async (req, res) => {
  try {
    const newProduct = req.body;
    const newProductDocument = new productModel(newProduct);
    const result = await newProductDocument.save();
    res.status(201).json({ message: 'product created', payload: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create product', error: err.message });
  }
});

// Route to return all products stored in the database
productApp.get('/product', async (req, res) => {
  try {
    const productList = await productModel.find();
    res.status(200).json({ message: 'products', payload: productList });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
});

// Route to fetch a single product by its ID
productApp.get('/product/:productId', async (req, res) => {
  try {
    const pid = req.params.productId;
    const productObj = await productModel.findById(pid);

    // Return 404 when no product is found for the given ID
    if (!productObj) {
      return res.status(404).json({ message: 'product not found' });
    }

    res.status(200).json({ message: 'product', payload: productObj });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch product', error: err.message });
  }
});

// Route to update an existing product by ID
productApp.put('/product/:productId', async (req, res) => {
  try {
    const modifiedProduct = req.body;
    const pid = req.params.productId;
    const updatedProduct = await productModel.findByIdAndUpdate(
      pid,
      { $set: modifiedProduct },
      { new: true, runValidators: true }
    );

    // If the product does not exist, respond with 404
    if (!updatedProduct) {
      return res.status(404).json({ message: 'product not found' });
    }

    res.status(200).json({ message: 'product modified', payload: updatedProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update product', error: err.message });
  }
});

// Route to delete a product by ID from the database
productApp.delete('/product/:productId', async (req, res) => {
  try {
    const pid = req.params.productId;
    const deletedProduct = await productModel.findByIdAndDelete(pid);

    // If the product does not exist, send a 404 response
    if (!deletedProduct) {
      return res.status(404).json({ message: 'product not found' });
    }

    res.status(200).json({ message: 'product deleted', payload: deletedProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete product', error: err.message });
  }
});


