import sql from 'mssql'
const dbsettings  = {
    user:"oman",
    password:"papas123",
    server:"127.0.0.1",
    database:'pokemon',
    options: {
        trustServerCertificate: true,
      }
}

export const getconnection = async () =>{
  try {
    const pool = await sql.connect(dbsettings);
    // pool.request().query()
  
    return pool;
  } catch (error) {
    console.log(error);
  }
}
getconnection();
export {sql}