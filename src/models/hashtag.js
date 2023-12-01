const mongoose=require('mongoose');
const hashtagSchema=new mongoose.Schema({
    hashtag:{
        type:String
    },
    tweet:[{
              type:mongoose.Schema.Types.ObjectId,
              ref:'Tweet'
            }],
})

const hashtag=mongoose.model('Hashtag',hashtagSchema);
// hashtag.insertMany([
// {
//     hashtag:'palestine'
// },
// {
//     hashtag:'israel'
// },
// {
//     hashtag:'worldcup'
// },
// {
//     hashtag:'modi'
// }
// ])
module.exports=hashtag;