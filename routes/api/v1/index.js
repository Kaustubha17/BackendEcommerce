var express=require('express');

const categoryController=require("../../../src/controllers/categoryController");
const productController=require("../../../src/controllers/productController");
var router=express.Router();

router.post("/category/all",categoryController.listCategories);


router.post("/products/all",productController.Products);
/*
{
    "categoryId":1
}

*/
module.exports=router;
