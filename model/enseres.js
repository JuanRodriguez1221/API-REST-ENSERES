const mongoose = require("mongoose");

const enserSchema = mongoose.Schema({
    nombre: {
        type:String,
        required: true,
    },
    cantidad: {
        type:Number,
        required: true
    },
    sede: {
        type:String,
        required: true
    }
});

module.exports = mongoose.model('enseres', enserSchema);