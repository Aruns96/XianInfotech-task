const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()

const customerRoutes = require('./routes/customer');
const invoiceRoutes = require('./routes/invoice');

const app = express();
app.use(cors());
app.use(express.json());



app.use('/api/customers', customerRoutes);
app.use('/api/invoices', invoiceRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(result=>{
    app.listen(3000,()=>{
        console.log("server is listening..")
    })
}).catch(e=>console.log(e))
