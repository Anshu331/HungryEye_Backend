// import mongoose from "mongoose";

// export const  connectDB = async () =>{
//     await mongoose.connect('{ Add your mongodb URI Here }/food-del').then(()=>console.log("DB Connected"))
// }

import mongoose from 'mongoose';

export const connectDB = async () => {
    console.log("Attempting to connect to the database...");
    try {
        await mongoose.connect('mongodb+srv://Hungryeye:hungryeye3321@cluster0.kdd93kx.mongodb.net/food-delivery', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

// Ensure the function is being called
connectDB();




// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.