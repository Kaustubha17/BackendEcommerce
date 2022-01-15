const sqlConnection=require('../services/sqlConnection');


function OrderDetailsByUserId(data,cb){
var sql=`select p.Name from OrderItems 
        oi  INNER JOIN OrderDetails od on oi.OrderID=od.ID INNER JOIN Products p on 
        oi.ProductID= p.ID where od.UserID=?`;

console.log("inside model and data is",data.userID);
var userID=[];
if(data.userID){
    userID.push(data.userID);
    }

sqlConnection.executeQuery(sql,userID,(err,result)=>{cb(err,result)});    


}

module.exports={OrderDetailsByUserId};