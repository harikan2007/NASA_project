const {parse} = require('csv-parse');
const path = require('path');
const fs = require("fs");
//const { resolve } = require('path');


const results = [];

function isHabitable (planet){
 return planet["koi_disposition"] === "CONFIRMED"
    && planet["koi_insol"] < 1.11 && planet["koi_insol"] > 0.36 
    && planet["koi_prad"] < 1.6;
}
function loadPlanets(){
return new promise ((resolve, reject)=>{fs.createReadStream(path.join(__dirname,"..","..","data","kepler_data.csv"))
.pipe(parse({
    comment:"#",
    columns: true,
}))
.on("data",(data)=>{
    if (isHabitable(data)){
    results.push(data)}

})
.on("error",(err)=>{
    console.log(err)
    reject(err)
})
.on("end",()=>{
    console.log(results.length)
    console.log("done!")
    resolve()
})})}
module.exports ={
    planets: results,
    loadPlanets: loadPlanets,
}