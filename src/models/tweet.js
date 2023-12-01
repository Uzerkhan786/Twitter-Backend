const mongoose=require('mongoose');

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        min:4,
        max:6
    },
    hashtag:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hashtag'
    }]
})

const tweet=mongoose.model('Tweet',tweetSchema);
module.exports=tweet;