
const { sendStatus } = require('express/lib/response');
const Category=require('../models/category');

module.exports={
    listCategories:function(req,res){
        Category.listCategories(function(err,result){
if(err){
    console.log(err);
    return res.status(500).send({
        message:"Error in fetching categories",
        success:false
        
    });
}

return res.status(200).send({
    message:"Successfully fetched categories",
    categories:result,
    success:true,
    
 


});
        }) 
    }
}