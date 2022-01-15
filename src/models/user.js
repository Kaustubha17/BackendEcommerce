const sqlConnection=require('../services/sqlConnection');

function UserSignUp(data,cb){
var values=[];

console.log(data.username,data.usertype,data.password);

var sql=`INSERT into Users
 (ID,Username,Password,UserType,CreatedAt,UpdatedAt) 
 values (DEFAULT, ?, ?, ?, now(), now())`;
values.push(data.username);
values.push(data.password);
values.push(data.usertype);


sqlConnection.executeQuery(sql,values,(err,result)=>{cb(err,result)});
}


function UserSign(data,cb){
    var values=[];
  
        var sql="SELECT ID FROM Users where Username=? and Password=?";

     values.push(data.username);
     values.push(data.password);

     console.log(values[0]);
     
    

    sqlConnection.executeQuery(sql,values,(err,result)=>{cb(err,result)})
}


module.exports={UserSignUp,UserSign};
