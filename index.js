const express = require("express");
const app = express();
const port = 3000;
const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());    //to send data in Json format via Body of our connection request as Express doenst read the body.

app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i<johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res) {
    
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put('/',function(req,res){           //to update existing data.
    for(let i =0; i< users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({           //res.json or res.send is important to let Postman know that the work has been done and it can now end or it will contiune to run loops.
        msg: "Put completed!"
    })
})

app.delete('/',function(req,res){
if(isThereAtleastOneUnhealthyKidney()){
   
        const newKidenysAfterUpdate = [];
        for(let i =0; i< users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidenysAfterUpdate.push({
                    healthy : true
                })
            }
        }
        users[0].kidneys = newKidenysAfterUpdate;
        res.json({
            msg : "Deleted!"
        })
    }
    else{
        res.status(411).json({
            msg : "No unhealthy Kidney!"
        })
    }
    
})



function isThereAtleastOneUnhealthyKidney(){
    let aleastOneUnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            aleastOneUnhealthyKidney = true;
        }
    }
    return aleastOneUnhealthyKidney
}






app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

