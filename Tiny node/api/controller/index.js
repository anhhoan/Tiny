var ItemModel=require('../model/index')
const fs=require('fs')
const addItem=async(req,res)=>{
    try {
        const name=req.body.name
        const fileImg=req.files
        const arrImg=[]
        for(let i=0; i<fileImg.length; i++){
            const url=`http://localhost:3001/${fileImg[i].filename}`
            arrImg.push(url)
        }
        await ItemModel.create({name:name,img:arrImg,time:Date.now()})
        res.send({
            message:'success',
            
        })
        
    } catch (error) {
        res.send({message:'failure'})
    }
}
const getItem=async(req,res)=>{
    try {
        const data=await ItemModel.find({})
        res.send({
            message:'success',
            data
        })
        
    } catch (error) {
        res.send({message:'failure'})
    }
}
const deleteItem=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await ItemModel.findByIdAndDelete(id)
        for(let i=0; i<data.img.length; i++){
            fs.unlinkSync(`media/${data.img[i].slice(22)}`)
        }
        res.send({
            message:'success',
            
        })
        
    } catch (error) {
        res.send({message:'failure'})
    }
}
const updateItem=async(req,res)=>{
    try {
        const id=req.params.id
        const name=req.body.name
        const fileImg=req.files
        const data=await ItemModel.findById(id)
        if(fileImg.length===0){
            await ItemModel.findByIdAndUpdate(id,{img:data.img})
        }
        else{
            const arrImg=[]
            for(let i=0; i<fileImg.length; i++){
                const url=`http://localhost:3001/${fileImg[i].filename}`
                arrImg.push(url)
            }
            const Item=await ItemModel.findByIdAndUpdate(id,{img:arrImg,name})
            for(let i=0; i<Item.img.length; i++){
                fs.unlinkSync(`media/${Item.img[i].slice(22)}`)
            }

        }
        res.send({
            message:'success',
            
        })
        
    } catch (error) {
        res.send({message:'failure'})
    }
}
const deleteOne=async(req,res)=>{
    try {
        const id=req.query.id
        const index=req.query.index
        const data=await ItemModel.findById(id)
        fs.unlinkSync(`media/${data.img[index].slice(22)}`)
        await data.img.splice(index,1)
        await ItemModel.findByIdAndUpdate(id,{img:data.img})
        res.send({
            message:'success'
        })
        
    } catch (error) {
        res.send({
            message:'failure'
        })
    }
}
const searchItem=async(req,res)=>{
    try {
        const nameSearch=req.query.nameSearch
        const data=await ItemModel.find({name:{
            $regex:nameSearch,
            $options:'i',
        } 
        })
        await data.sort((a, b) => (a.time < b.time) ? 1 : -1)
        res.send({
            message:'success',
            data,
            nameSearch
        })
    } catch (error) {
        res.send({message:'failure'})
    }

}
const searchId=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await ItemModel.findById(id)
        console.log(data,'dataaaa');
        res.send({
            data
        })
    } catch (error) {
        res.send({
            message:'failure'
        })
    }
}

module.exports={getItem,addItem,deleteItem,updateItem,deleteOne,searchItem,searchId}