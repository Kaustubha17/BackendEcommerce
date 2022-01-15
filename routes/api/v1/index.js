var express=require('express');

const categoryController=require("../../../src/controllers/categoryController");
const productController=require("../../../src/controllers/productController");
const orderController=require("../../../src/controllers/orderController");
var router=express.Router();

router.post("/category/all",categoryController.listCategories);


router.post("/products/all",productController.Products);

router.post("/addProduct",productController.addProduct);

router.post("/orders/details",orderController.getProductNameByUserID);
/*
{
    "categoryId":1
}

*/
module.exports=router;
