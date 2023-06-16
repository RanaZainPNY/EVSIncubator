const express=require("express");
const categoryRouter=express.Router();
const {GetCategories,GetCategory, AddCategory, DeleteCategory, UpdateCategory }=require("../controllers/categories.controller");

categoryRouter.get("/",GetCategories)
categoryRouter.get("/:id",GetCategory);
categoryRouter.post("/",AddCategory);
categoryRouter.put("/:id",UpdateCategory);
categoryRouter.delete("/:id",DeleteCategory);

module.exports=categoryRouter;

