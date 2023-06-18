const { Category, DataHandler } = require("../mymodules/evs15.pakclassified");

//object of DataHandler our own node module
const handler = new DataHandler();

const GetCategories = (req, res) => {    
    return res.status(200).send(handler.Categories);
}

const GetCategory = (req, res) => {
    const cid = req.params.id;
    if (cid > 0) {
        const found = handler.GetCategory(cid);
        if (found) {
            return res.status(200).send(found);
        }
        return res.status(404).send(`category against id: ${cid} is not found`);
    }
    else {
        return res.status(400).send("category id can't be 0 or negative");
    }
}



//POST Request
//category object will be passed in body of the request as json data
const AddCategory = (req, res) => {
    try {
        const category = new Category(0,req.body.Name, req.body.ImageUrl);
        category.Parent = handler.GetCategory(req.body.Parent.Id);
        handler.AddCategory(category);
        return res.status(201).send(category);
    }
    catch (err) {
        return res.status(500).send("Something went wront, please try again");
    }
}


//UPDATE Request
//id will be passed as route data
//category object will be passed in body of the request as json data
const UpdateCategory = (req, res) => {
    try {
        console.log(req.params.id);
        console.log(req.body);

        const current=new Category(req.params.id,req.body.Name,req.body.ImageUrl,req.body.Parent);        
        //handler.UpdateCategory(req.params.id,req.body);
        if(req.params.id<1)  res.status(400).send("id cant be zero or negative number");
        if(!req.body.Name) res.status(400).send("invalid json data");        
        console.log(current);
        const result = handler.UpdateCategory(req.params.id,current);
        if(result) return res.status(200).send(result);        
        return res.status(404).send("category with given id is not found");        
    }
    catch (err) {
        return res.status(500).send(err);
        //return res.status(500).send("Something went wront, please try again");
    }
}


//Delete Request
//id will be passed as route data
const DeleteCategory = (req, res) => {
    try {
        const id=req.params.id
        console.log(id);
        const result = handler.DeleteCatagory(id);
        if(result){
            return res.status(200).send(result);        
        }
        return res.status(404).send("category with given id is not found");                
    }
    catch (err) {
        return res.status(500).send("Something went wront, please try again");
    }
}




module.exports = { GetCategories, GetCategory, AddCategory,UpdateCategory,DeleteCategory };