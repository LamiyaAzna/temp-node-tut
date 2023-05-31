const {Client} = require('pg')

const client = new Client({
    host : "localhost",
    user : "postgres",
    port : 5432,
    password : "postgres",
    database : "Servicing_Sonar"
})

client.on("connect", () => {
   console.log("Database connection");
})

client.on("end", () =>{
    console.log("Connection End");
})
module.exports = client;