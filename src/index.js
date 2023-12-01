const express=require('express');
const mongoDB=require('./utils/db')
const{Tweet,Hashtag}=require('./models/index');
const hashtag = require('./models/hashtag');
// const{hashtagRepository}=require('./repository/index')
const{tweetService}=require('./services/index');
// const hashtag=new hashtagRepository();
const tweet=new tweetService();
const app=express();
app.listen(3000,async()=>{
    await mongoDB();
   const u=await tweet.createTweetService({
    content:'#mbbs #unique kon he'
   })
  console.log(u);
  
    console.log(`Server is listening at port ${3000}`);
})