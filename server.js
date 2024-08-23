
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();


// Connect to MongoDB
mongoose.connect('mongodb+srv://hunkydixitpatel8320:dixit8320@cluster0.uz77kop.mongodb.net/', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log('Connected to MongoDB')
});


// Enable CORS
const corsOptions = {
	origin: process.env.FRONTEND_URL || 'http://localhost:3000',
	credentials: true,
  };

const app = express();
app.use(cors(corsOptions));



const usersRoute = require('./routes/users/user');
const groupsRoute = require('./routes/groups/group');
const productsRoute = require('./routes/products/products');
const categoryRoute = require('./routes/category/category');
const storesRoute = require('./routes/stores/stores');
const tablesRoute = require('./routes/tables/tables');
const orderRoute = require('./routes/order/order');
const reportRoute = require('./routes/reports/reports');
const companyinfoRoute = require('./routes/companyinfo/information');
const profileRoute = require('./routes/profile/profie');
const settingRoute = require('./routes/setting/setting');
const manageorderRoute = require('./routes/order/manageorder');


app.use('/api/users', usersRoute);
app.use('/api/groups', groupsRoute);
app.use('/api/products', productsRoute);
app.use('/api/category', categoryRoute);
app.use('/api/stores', storesRoute);
app.use('/api/tables', tablesRoute);
app.use('/api/order', orderRoute);
app.use('/api/report', reportRoute);
app.use('/api/companyinfo', companyinfoRoute);
app.use('/api/profile', profileRoute);
app.use('/api/setting', settingRoute);
app.use('/api/manageorder', manageorderRoute);

// Add more routes here

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
