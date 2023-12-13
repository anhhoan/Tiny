var mongoose=require('mongoose')
const ItemModel= new mongoose.Schema({
    name:{
        type:String
    },
    img:{
        type:Array
    },
    time:{
        type:String
    }
})
module.exports= mongoose.model('item',ItemModel)