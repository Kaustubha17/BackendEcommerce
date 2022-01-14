const Product=require("../models/product");

function Products(req,res){
var data=req.body;
Product.listProducts(data,function(err,result){
    if(err){
       console.log(err);
        return res.status(500).send({message:"Not OK"});
    }
return res.status(200).send({
success:true,
msg:"Successfull fetched products",
product:result

})

})


}

module.exports={Products};