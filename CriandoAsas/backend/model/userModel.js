const mongoose = require('../config/database')

const Schema = mongoose.Schema;

const userSchema =  new Schema({
    renda: {type: Number, required:true},
    CEP: {type: Number, required:true}
})
module.exports = mongoose.model('User',userSchema);