const Orders=require('../models/orderDetails');

function getProductNameByUserID(req,res){
  
    var data=req.body;

    // console.log("inside controller",data.userId);
if(data){
    Orders.OrderDetailsByUserId(data,function(err,result){
        if(err){
            res.status(500).send("Not OK");
        }
        res.status(200).send({
products:result

        })
    })
}


}


module.exports={getProductNameByUserID};