const mongoose = require('mongoose');


const ListingSchema = new mongoose.Schema({

    listing_id: {
        type: String,
        required: [true, 'Please enter listing Id'],
        unique: [true, "Id exist"],
        trim: true,
        lowercase: true
    },

    listing_title: {
        type: String,
        required: [true, 'Please enter title'],
        trim: true,
        lowercase: true
    },

    description: {
        type: String,
        required: [true, 'Please enter description'],
        trim: true,
        lowercase: true,
        maxLength: 1000
    },


    street: {
        type: String,
        required: [true, 'Please enter street'],
        required: true,
        trim: true,
        lowercase: true
    },

    city: {
        type: String,
        required: [true, 'Please enter city'],
        required: true,
        trim: true,
        lowercase: true
    },

    postal_code: {
        type: String,
        required: [true, 'Please enter postal code'],
        required: true,
        trim: true,
        lowercase: true
    },

    price: {
        type: Number,
        default: 0.0,
        required: [true, 'Please enter price'],
        validate(value) {
            if (value < 0.0) {
                throw new Error("Price can not be negative ");
            }
        }
    },

    email: {
        type: String,
        required: [true, 'Please enter email'],
        unique: [true, "Email should be unique"],
        trim: true,
        uppercase: true,
        validate: function (value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },

    username: {
        type: String,
        required: [true, 'Please enter username'],
        trim: true,
        lowercase: true
    },

    type: {
        type: String,
        default: 'admin',

    },

    created: {
        type: Date,
        default: Date.now
    }



});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;