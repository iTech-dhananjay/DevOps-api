const mongoose =require('mongoose');


//we are not using .then.catch as promise we replace with Async function that works same
const connectDB = async() =>{
    const conn= await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology:true,
        useFindAndModify:false,
    
    });

    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold);
}

module.exports= connectDB;