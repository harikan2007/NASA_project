const http = require("http")
const {loadPlanets} = require("./models/planets.model")
const PORT = process.env.PORT || 8000
const app = require("./app")
const server = http.createServer(app)
async function startServer (){
await loadPlanets();
server.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT} `)
})
}
startServer();