const User = require('./models/User');
const Listing = require('./models/Listing');
const Booking = require('./models/Booking');


exports.resolvers = {
    Query: {

        getUser: async (parent, args) => {
            return await User.find({});
        },
        getListing: async (parent, args) => {
            return await Listing.find({});
        },
        getBooking: async (parent, args) => {
            return await Booking.find({});
        },


        getListingByName: async (parent, args) => {
            return await Listing.find({ "listing_title": args.listing_title });
        },
        getListingByCity: async (parent, args) => {
            return await Listing.find({ "city": args.city });
        },


        getUserByID: async (parent, args) => {
            return await User.findById(args.id);
        },
        getListingByID: async (parent, args) => {
            return await Listing.findById(args.id);
        },
        getBookingByID: async (parent, args) => {
            return await Booking.findById(args.id);
        },
    },

    Mutation: {

        // ***********************User Start***************************
        addUser: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail = emailExpression.test(String(args.email).toLowerCase())

            if (!isValidEmail) {
                throw new Error("Email is not valid")
            }

            let newUser = new User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type,
            });
            return await newUser.save();
        },


        updateUser: async (parent, args) => {
            console.log(args)
            if (!args.id) {
                return;
            }
            return await User.findOneAndUpdate(
                {
                    _id: args.id
                },
                {
                    $set: {
                        username: args.username,
                        firstname: args.firstname,
                        lastname: args.lastname,
                        password: args.password,
                        email: args.email,
                        type: args.type,
                    }
                }, { new: true }, (err, user) => {
                    if (err) {
                        console.log('Could not update user !');
                    } else {
                        return user
                    }
                }
            );
        },

        deleteUser: async (parent, args) => {
            console.log(args)
            if (!args.id) {
                return JSON.stringify({ status: false, "message": "No ID found" });
            }
            return await User.findByIdAndDelete(args.id)
        },

        // ***********************User End***************************


        // ***********************Listing Start***************************


        addListing: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail = emailExpression.test(String(args.email).toLowerCase())

            if (!isValidEmail) {
                throw new Error("Email is not valid")
            }

            let newListing = new Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username,
                type: args.type,
                created: args.created,
            });
            return await newListing.save();
        },


        updateListing: async (parent, args) => {
            console.log(args)
            if (!args.id) {
                return;
            }
            return await Listing.findOneAndUpdate(
                {
                    _id: args.id
                },
                {
                    $set: {
                        listing_id: args.listing_id,
                        listing_title: args.listing_title,
                        description: args.description,
                        street: args.street,
                        city: args.city,
                        postal_code: args.postal_code,
                        price: args.price,
                        email: args.email,
                        username: args.user_id,
                        type: args.type,
                        created: args.created,
                    }
                }, { new: true }, (err, listing) => {
                    if (err) {
                        console.log('Could not update listing !');
                    } else {
                        return listing
                    }
                }
            );
        },


        deleteListing: async (parent, args) => {
            console.log(args)
            if (!args.id) {
                return JSON.stringify({ status: false, "message": "No ID found" });
            }
            return await Listing.findByIdAndDelete(args.id)
        },



        // ***********************Listing End***************************




        // ***********************Booking start***************************


        addBooking: async (parent, args) => {

            let newBooking = new Booking({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: args.username,
            });
            return await newBooking.save();
        },



        updateBooking: async (parent, args) => {
            console.log(args)
            if (!args.id) {
                return;
            }
            return await Booking.findOneAndUpdate(
                {
                    _id: args.id
                },
                {
                    $set: {
                        listing_id: args.listing_id,
                        booking_id: args.booking_id,
                        booking_date: args.booking_date,
                        booking_start: args.booking_start,
                        booking_end: args.booking_end,
                        username: args.username,
                    }
                }, { new: true }, (err, booking) => {
                    if (err) {
                        console.log('Could not update booking');
                    } else {
                        return booking
                    }
                }
            );
        },
        deleteBooking: async (parent, args) => {
            console.log(args)
            if (!args.id) {
                return JSON.stringify({ status: false, "message": "No ID found" });
            }
            return await Booking.findByIdAndDelete(args.id)
        },


        // ***********************Booking End***************************

    }
}