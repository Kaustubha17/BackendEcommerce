// const { response } = require('../../app');
const User=require('../models/user');

function UserSignUpController(req,res){
  
    data=req.body;

    
    if(data.username && data.password && data.usertype){
        console.log("inside controller",data);
        User.UserSignUp(data,function(err,result){
            if(err){
                res.status(500).send("Not OK");
            }
            else{
                res.status(200).send({
                    "status":"User created successfully",
                    "user":result
                })
            }
        })
    }

    else{
        res.send("Please enter correct credentials");
    }
}


function GetUser(req,res){
    data=req.body;
    if(data.username && data.password){
        User.UserSign(data,function(err,result){
            if(err){
                res.status(500).send("Not OK");
            }
            else{
                res.status(200).send({
                    "status":"User id is",
                    "user":result
                })
            }
        })
    }
    else{
        res.send("Pleas enter valid creds");
    }
}

module.exports={UserSignUpController,GetUser};