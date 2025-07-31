// const mongoose = require('mongoose');
const dotenv = require('dotenv');

// // Load environment variables from the .env file in the src directory
require('dotenv').config(); 

// // Log the MongoDB URI to verify it's loaded correctly
// console.log("MongoDB URI: ", process.env.MONGO_DB);

// const connectDbB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("DB connected");
//     } catch (err) {
//         console.error("DB connection failed:", err.message);
//     }
// };

// module.exports = connectDbB;


const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.DB_CONNECTION_SECRET).then((res)=>{
    console.log("DB connected");
  }).catch((err)=>{
    console.error("DB connection failed:", err);
  })
};

module.exports = connectDB;
