const { gql } = require('apollo-server-express');

exports.typeDefs = gql`

    type User {
        username: String!
        password: String!
        token:String
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
        token:String
    }  

    type Booking {
        listing_id: String! 
        booking_id:String!
        booking_date:String!
        booking_start:String!
        booking_end:String! 
        username:String!
    }

    type AuthData{
        username:String!
        password:String!
        token:String
        tokenExpriration:String
    }

    type Query {
      getUser:[User]
      getListing: [Listing]
      getBooking(listing_id:String):[Booking]
      getBookingEvent:[Booking]

      getListingCreatedByAdmin(type: String!): [Listing]

      getListingByName(listing_title: String!): [Listing]
      getListingByCity(city: String!): [Listing]

      getUserByID(id: ID!): User
      getListingByID(id: ID!): Listing
      getBookingByID(id: ID!): Booking

      userLoggedInBooking(username:String, password:String):Booking
      adminLoggedInListing(username:String):Listing


    }


    type Mutation {

        userLoggedIn(
            username: String
            password: String
            token:String
        ): AuthData

        adminLoggedIn(
            username: String
            password: String
            token:String
        ): AuthData

        addUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type:String
            token:String
         ):User
      
         updateUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type:String
            token:String
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
            token:String
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
            token:String         
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