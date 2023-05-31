const {Client} = require('pg')

const client = new Client({
    host : "localhost",
    user : "postgres",
    port : 5432,
    password : "postgres",
    database : "Servicing_Sonar"
})

client.connect();
client.query(`Select * from tb_asmi_security_parameters`, (err, res) =>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
})