const sqlConnection=require("../services/sqlConnection");

function listCategories(cb){
    var sql="SELECT ID as categoryID,Name as name from Categories";
    sqlConnection.executeQuery(sql,'',function(err,result){
        cb(err,result);
    })
}

module.exports={listCategories};
