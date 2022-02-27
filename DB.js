mutation{
    addUser(
        username: "hmzkoc",
        firstname: "koc",
        lastname: "Patel",
        password: "test123",
        email: "p@aaa.com"
    ){
        username
        password
        token
    }
    
    


    mutation{

        addListing(
            listing_id: "L001aaaa",
            listing_title: "Sea face home for rent",
            description: "max 1000-character description",
            street: "171 Young Street",
            city: "Toronto",
            postal_code: "M1X0Y5",
            price: 150.00,
            email: "contacaaat@hiltaaonaa.com",
            username: "pritamworald",
            created: "2022-02-26"

        ){
            listing_id
            listing_title
            description
            street
            city
            postal_code
            price
            email
            username
            type
            created
            token
        }

    }




      mutation{
        addBooking(
            listing_id: "L00aa1",
            booking_id: "B00a1a",
            booking_date: "01-24-2022",
            booking_start: "01-25-2022",
            booking_end: "01-30-2022",
            username: "pritamworlad"
        ){
            listing_id
            booking_id
            booking_date
            booking_start
            booking_end
            username
        }
    }

      mutation{
        userLoggedIn(
            username: "hmzkoc",
            password: "test123"
        ){
            username
            password
            token
            tokenExpriration

        }
    }