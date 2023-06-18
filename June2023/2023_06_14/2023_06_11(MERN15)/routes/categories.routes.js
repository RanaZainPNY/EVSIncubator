const express=require("express");
const categoryRouter=express.Router();
const {GetCategories,GetCategory, AddCategory, DeleteCategory, UpdateCategory }=require("../controllers/categories.controller");


categoryRouter.get("/add",GetCategories);
element.addEventListener('click', eventCallback);
categoryRouter.get("/:id",GetCategory);
categoryRouter.post("/",AddCategory);
categoryRouter.put("/:id",UpdateCategory);
categoryRouter.delete("/:id",DeleteCategory);

module.exports=categoryRouter;

