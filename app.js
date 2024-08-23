const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Load environment variables
require('dotenv').config();

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.url="mongodb+srv://hunkydixitpatel8320:dixit8320@cluster0.sxqw1ba.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Handle const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Load environment variables
require('dotenv').config();

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.url="mongodb+srv://hunkydixitpatel8320:dixit8320@cluster0.sxqw1ba.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Handle MongoDB connection error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define routes
app.use('/api', require('./routes/api'));

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});MongoDB connection error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define routes
app.use('/api', require('./routes/api'));

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//this is extra if needed
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// Middleware for JSON parsing
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://hunkydixitpatel8320:dixit8320@cluster0.uz77kop.mongodb.net/', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log('Connected to MongoDB')
});

// Define the Product schema
const productSchema = new mongoose.Schema({
	name: String,
	description: String,
	image: String,
	reviews: [
		{
			user: String,
			rating: Number,

			comment: String,
		},
	],
});

const Product = mongoose.model('Product', productSchema);

// API endpoints
// Route to add a new product
app.post('/api/products', async (req, res) => {
	try {
		const { name, description, image } = req.body;


		// Validate request data
		if (!name || !description || !image) {
			return res.status(400).json(
				{
					message: 'Incomplete product data'
				}
			);
		}

		// Create a new product
		const newProduct = new Product({
			name,
			description,
			image,
			reviews: [],
		});

		// Save the new product to the database
		const savedProduct = await newProduct.save();

		// Respond with the newly added product
		res.status(201).json(savedProduct);
	} catch (error) {
		console.error('Error adding product:', error);
		res.status(500)
			.json(
				{
					message: 'Internal Server Error'
				}
			);
	}
});
app.get('/api/products', async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.post('/api/products/:id/review', async (req, res) => {
	const { user, rating, comment } = req.body;

	try {
		const product =
			await Product.findById(req.params.id);
		product.reviews
			.push(
				{
					user, rating,
					comment
				}
			);
		await product.save();
		res.status(201).json(product);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// Delete a product by ID
app.delete('/api/products/:id', async (req, res) => {
	const productId = req.params.id;
	try {
		// Find the product by ID and delete it from the database
		const deletedProduct =
			await Product.findByIdAndDelete(productId);

		if (!deletedProduct) {
			return res.status(404)
				.json(
					{
						message: 'Product not found'
					}
				);
		}

		res.json(
			{
				message: 'Product deleted',
				deletedProduct
			}
		);
	} catch (error) {
		console.error('Error deleting product:', error);
		res.status(500)
			.json(
				{
					message: 'Internal Server Error'
				}
			);
	}
});
app.listen(PORT,
	() => {
		console.log(`Server is running on port ${PORT}`);
	});
//---