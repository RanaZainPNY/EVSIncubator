const express=require("express");
const adRouter=express.Router();
const {GetAdvertisements,GetAdvertisement} =require("../controllers/advertisements.controller");

adRouter.get("/",GetAdvertisements);
adRouter.get("/:id",GetAdvertisement);


module.exports=adRouter;

