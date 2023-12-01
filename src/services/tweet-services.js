const {tweetRepository,hashtagRepository}=require('../repository/index');
const hash=new hashtagRepository()
class tweetServices{
    constructor(){
        this.tweet=new tweetRepository()
    }
    async createTweetService(data){
    try {
        const content=data.content;
        const createUserTweet=await  this.tweet.createTweet(data);
        const hashtag=content.match(/#[a-zA-Z0-9_]+/g);
        let tweetHashtag=hashtag.map(element=>element.substring(1));
        console.log(tweetHashtag);
        let allHashTag=await hash.getAllHashTag();
      
       let  arr=allHashTag.map(ele=>ele.hashtag);
     //  console.log((allHashTag));
       console.log(arr);

       let commonHashTag=tweetHashtag.filter(value=>arr.includes(value));
       let notCommonHashTag=tweetHashtag.filter(value=>!arr.includes(value));
       //console.log(commonHashTag);
       notCommonHashTag=notCommonHashTag.map(val=>{
        return {
            hashtag:val,
            tweet:[createUserTweet.id]
        }
       })//refactoring code to hashtag model type
       console.log(commonHashTag);
       console.log(notCommonHashTag);
       const alreadyPresentHashTag=await hash.getHashTagName(tweetHashtag);
       console.log(alreadyPresentHashTag);
       const createNewHash=await hash.createAllHashtag(notCommonHashTag);
       console.log(createNewHash);
      
       alreadyPresentHashTag.forEach(ele=>{
             ele.tweet.push(createUserTweet.id);
             ele.save();
       });
       
      

       

        return createUserTweet;     
    } catch (error) {
    throw error
    }
    }
}

module.exports=tweetServices;