
import { model, Schema } from 'mongoose';

// Define the product shape and validation rules for MongoDB
const productSchema = new Schema({
  productId: {
    type: Number,
    required: [true, 'id is required'],
  },
  productName: {
    type: String,
    required: [true, 'name is required'],
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
    min: [10000, 'min price is 10000'],
    max: [50000, 'max price is 50000'],
  },
  brand: {
    type: String,
    required: [true, 'brand name is required'],
  },
});

// Create and export the Mongoose model for products
export const productModel = model('product', productSchema);

