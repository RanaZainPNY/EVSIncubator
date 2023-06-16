const {Advertisement,DataHandler}=require("../mymodules/evs15.pakclassified");

//object of DataHandler our own node module
const handler=new DataHandler();

const GetAdvertisements=(req,res)=>{
    return res.status(200).send(handler.GetAdvertisements());
}

const GetAdvertisement=(req,res)=>{
    const id =req.params.id;
    if(id>0){
        const found = handler.GetAdvertisement(id);
        if(found){
            return res.status(200).send(found);
        }
        return res.status(404).send(`advertisement against id: ${id} is not found`);        
    }
    else {
        return res.status(400).send("advertisement id can't be 0 or negative");
    }    
}

module.exports={GetAdvertisements,GetAdvertisement};