const {Hashtag}=require('../models/index');

class hashtagRepository{
    
    async createHashTag(data){
        try {
            const user=await Hashtag.create(data);
            return user
        } catch (error) {
            console.log('something went wrong in the repository');
            throw error
        }     
    }


    async getOneHashTag(id){
        try {
            const user=await Hashtag.findById(id);
            return user
        } catch (error) {
            console.log('something went wrong in the repository');
            throw error
        }       
    }


    async deleteHashtag(id){
        try {
            const user=await Hashtag.findByIdAndDelete(id);
            return user;
        } catch (error) {
            console.log('something went wrong in the repository');
            throw error
        }    
    }

    async updateHashtag(id,data){
        try {
            const user=await Hashtag.findByIdAndUpdate(id,data,{alter:true});
            return user;
        } catch (error) {
            console.log('something went wrong in the repository');
            throw error
        }    
    }


    async getAllHashTag(){
        try {
            const user=await Hashtag.find();
            return user;
        } catch (error) {
            console.log('something went wrong in the repository');
            throw error
        }    
    }

    //FIND ONE

    async findHashTag(data){

        try {
            const a=await Hashtag.findOne(data);
            return a;
        } catch (error) {
            
        }
    }

    async createAllHashtag(data){
        try {
            const hashtag=await Hashtag.insertMany(data);
            return hashtag;
        } catch (error) {
            console.log(error)
        }
    }

    async getHashTagName(data){
        try {
            const user=await Hashtag.find({
                hashtag:data
            });
            return user;
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports=hashtagRepository;