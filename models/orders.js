const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    product_list: [
    {type: String}
    ],
    total_price: Number,
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user'
    }   
})

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;