const mongoose = require('mongoose');

const url = "mongodb+srv://joaovitor:joaovitor@cluster0.tbfur.mongodb.net/";
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;