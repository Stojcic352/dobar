const express = require('express');
const app = express()
const mongoose = require('mongoose');
const PORT = 5000
const { kurac } = require('./keys')
require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(kurac, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('povezani na mongodb');
})
mongoose.connection.on('error', (err) => {
    console.log('err connecting', err);
})

app.get('/', (req, res) => {
    res.send("hello world");
})

app.listen(PORT, () => {
    console.log("server is running on port:", PORT)
})