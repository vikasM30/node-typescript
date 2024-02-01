const express = require('express');
const helmet = require('helmet') // help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.

// const ProductRoutes = require('./routes/Product.route')
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(helmet())

// app.use('/products', ProductRoutes);


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});