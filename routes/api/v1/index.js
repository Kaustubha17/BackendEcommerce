var express=require('express');

const categoryController=require("../../../src/controllers/categoryController");
const productController=require("../../../src/controllers/productController");
const orderController=require("../../../src/controllers/orderController");
const userController=require("../../../src/controllers/userController");
var router=express.Router();

router.post("/category/all",categoryController.listCategories);


router.post("/products/all",productController.Products);

router.post("/addProduct",productController.addProduct);

router.post("/orders/details",orderController.getProductNameByUserID);

router.post("/User/add",userController.UserSignUpController);

router.post("/User/signin",userController.GetUser);
/*
{
    "categoryId":1
}

*/
module.exports=router;
