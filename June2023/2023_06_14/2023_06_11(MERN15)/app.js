const path=require("path");
const fs=require("fs");

const  categoryRouter =require("./routes/categories.routes");
const  advertisementRouter =require("./routes/advertisements.routes");
const express=require("express");

//express object and port to listen
const app=express();
const port=8500;


// app.get("/products",(req,res)=>{

// });


//static content folder
const publicFolder=path.resolve(__dirname,"public");
app.use(express.static(publicFolder));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//set routing files
app.use("/api/v1/categories",categoryRouter);
app.use("/api/v1/advertisements",advertisementRouter);


app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
});




