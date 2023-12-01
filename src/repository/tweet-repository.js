const {Tweet}=require('../models/index');

class tweetRepository{

    async createTweet(data){
        try {
            const user=await Tweet.create(data);
            return user
        } catch (error) {
            console.log('something went wrong in the repository');
            throw error
        }
          
    }

    async getOneTweet(id){
        try {
            const user=await Tweet.findById(id);
            return user
        } catch (error) {
            console.log('something went wrong in the repository');
            throw error
        }       
    }

    async deleteTweet(id){
        try {
            const user=await Tweet.findByIdAndDelete(id);
            return user;
        } catch (error) {
            console.log('something went wrong in the repository');
            throw error
        }    
    }

    async getAllTweet(){
        try {
            const user=await Tweet.find();
            return user;
        } catch (error) {
            console.log('something went wrong in the repository');
            throw error
        }    
    }
}

module.exports=tweetRepository;