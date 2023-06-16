const express=require("express");
const advertisementRouter=express.Router();
const {GetAdvertisements,GetAdvertisement} =require("../controllers/advertisements.controller");

advertisementRouter.get("/",GetAdvertisements);
advertisementRouter.get("/:id",GetAdvertisement);


module.exports=advertisementRouter;

