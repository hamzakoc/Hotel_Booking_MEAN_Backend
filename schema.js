const { gql } = require('apollo-server-express');

exports.typeDefs = gql`

    type User {
        username: String!
        password: String!
    }
        
    type Listing {
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username:String!
        type:String!
        created:String!
    }  

    type Booking {
        listing_id: String! 
        booking_id:String!
        booking_date:String!
        booking_start:String!
        booking_end:String! 
        username:String!
    }


    type Query {
      getUser:[User]
      getListing: [Listing]
      getBooking:[Booking]

      getListingByName(listing_title: String!): [Listing]
      getListingByCity(city: String!): [Listing]

      getUserByID(id: ID!): User
      getListingByID(id: ID!): Listing
      getBookingByID(id: ID!): Booking

    }


    type Mutation {
          

        addUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type:String
         ):User
      
         updateUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type:String
        ):User 

        deleteUser(
            id: ID!
        ): User



        addListing(
            listing_id: String!
            listing_title: String!
            description:String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username:String!
            type:String
            created:String!
         ): Listing
     
         updateListing(
            listing_id: String!
            listing_title: String!
            description:String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username:String!
            type:String
            created:String!         
         ): Listing
      
         deleteListing(
             id: ID!
        ): Listing
      

     


        addBooking(
            listing_id:String!
            booking_id:String!
            booking_date:String!
            booking_start:String!
            booking_end:String!
            username:String!
        ):Booking  
      
        updateBooking(
            listing_id:String!
            booking_id:String!
            booking_date:String!
            booking_start:String!
            booking_end:String!
            username:String!
        ):Booking 

        deleteBooking(
            id: ID!
        ): Booking
         
    }
 ` 