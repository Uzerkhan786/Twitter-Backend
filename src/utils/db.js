const mongoose=require('mongoose');

const mongoDB=async(req,res)=>{
      
    await mongoose.connect('mongodb://localhost:27017/twitter');
    console.log('Database is connected');
}

module.exports=mongoDB;