const client = require('./database');




( async() =>{
    await client.connect();
  //  const result = await client.query(`insert into  tb_asmi_security_parameters(maker_id) values('admin')`);
    const result = await client.query("select * from tb_asmi_security_parameters where app_id = 'Admin'");
    console.log(result.rows);
    console.log(result.rowCount);
    client.end();
   
})();