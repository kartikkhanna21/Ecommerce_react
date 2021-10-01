import bcrypt from 'bcryptjs';
const data={
    users:[
        {
            name:'kartik',
            email:'example@gmail.com',
            password:bcrypt.hashSync('mishika1',8),//here mishika1 is password and 8 is option for autosort, also password is getting encrypted using bcrypt
            isadmin:true
        },

        {
            name:'john',
            email:'abcd123@gmail.com',
            password:bcrypt.hashSync('mishika123',8),//here mishika1 is password and 8 is option for autosort,
            isadmin:false
        },
        {
            name:'birju',
            email:'xyz@gmail.com',
            password:bcrypt.hashSync('kartik123',8),//here mishika1 is password and 8 is option for autosort,
            isadmin:false
        }
    ],
    product:[
        {
         
            name:'Nike Denim Jacket',
            category:'Clothes',
            image:"/product.jpg",
            price:500,
            brand:'Levis',
            rating:4.5,
            numReviews:10,
            countInStock:10,
            description:'High Quality Product'
        },
        {
          
            name:'Puma Denim Jacket',
            category:'Clothes',
            image:"/product.jpg",
            price:500,
            brand:'Levis',
            rating:2,
            numReviews:11,
            countInStock:0,
            description:'High Quality Product'
        },
        {
          
            name:'Levis Denim Jacket',
            category:'Clothes',
            image:"/product.jpg",
            price:500,
            brand:'Levis',
            rating:1.5,
            numReviews:25,
            countInStock:5,
            description:'High Quality Product'
        },
        {
           
            name:'H&M Denim Jacket',
            category:'Clothes',
            image:"/product.jpg",
            price:500,
            brand:'Levis',
            rating:2,
            numReviews:20,
            countInStock:20,
            description:'High Quality Product'
        },
        {
           
            name:'Addidas Denim Jacket',
            category:'Clothes',
            image:"/product.jpg",
            price:500,
            brand:'Levis',
            rating:3.5,
            numReviews:13,
            countInStock:0,
            description:'High Quality Product'
        },
        {
            
            name:'Reebok Denim Jacket',
            category:'Clothes',
            image:"/product.jpg",
            price:500,
            brand:'Levis',
            rating:5,
            numReviews:12,
            countInStock:4,
            description:'High Quality Product'
        }
    ]
}

export default data;