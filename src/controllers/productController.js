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


function addProduct(req, res) {
    let data = req.body;
    if(data.name && data.price && data.description && data.categoryId && data.vendorId) {
        Product.addProduct(data, function(err, result) {
            if(err) {
                console.log(err);
                return res.status(500).send({message: "Not ok!"});
            }
            return res.status(200).send({
                success: true,
                msg: "Successfully added products",
                products: result
            })
        })
    }
}




module.exports={Products,addProduct};
// module.exports={addProduct};