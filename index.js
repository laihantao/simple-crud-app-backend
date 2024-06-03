const express = require('express');
const mongoose = require('mongoose'); 
const productRoute = require('./routes/product.route.js')
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
app.use('/api/products', productRoute);

// Default page
app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated!');
});



mongoose.connect('mongodb+srv://laihantao26:aZyFLHNKBbXkZoEE@backenddb.1ygwm8k.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(3000, () => {
      console.log('Server is now running on port 3000!');
    });
  })
  .catch((err) => {
    console.log("Connection to MongoDB failed!", err);
  });
