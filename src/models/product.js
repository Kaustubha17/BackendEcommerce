const sqlConnection=require("../services/sqlConnection");

function listProducts(data,cb){
    var sql="Select ID as productId,Name as name, Price as price FROM Products ";
    var values=[];
    if(data.categoryId){

        sql+="WHERE CategoryID=?";
        values.push(data.categoryId);


    }
    sqlConnection.executeQuery(sql, values,(err, result) =>cb(err, result))   
}

module.exports={listProducts};