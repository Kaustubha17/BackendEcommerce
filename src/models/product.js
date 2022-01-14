const sqlConnection=require("../services/sqlConnection");

function listProducts(data,cb){
    var sql="Select ID as productId,Name as name, Price as price FROM Products ";
    var values=[];
    if(data.categoryId){

        sql+="WHERE CategoryID=? ";
        values.push(data.categoryId);

if(data.minPrice){
    sql+="AND PRICE>=? ";
    values.push(data.minPrice);
}
if(data.maxPrice){
    sql+="AND PRICE<=?";
    values.push(data.maxPrice);
}
    }
    else if(data.minPrice){
        sql+="WHERE PRICE>=?";
        values.push(data.minPrice);
    }
    else if(data.maxPrice){
        sql+="WHERE PRICE<=?";
        values.push(data.maxPrice);
    }

    sqlConnection.executeQuery(sql, values,(err, result) =>cb(err, result))   
}

module.exports={listProducts};