import {Sequelize} from "sequelize-typescript";

//import { emp } from "./modelsTypescript/employeeTypescript"; 

export const sequelize = new Sequelize("kibbitz_db", "admin", "rootroot", {
    // database : "kibbitz_db",
    // username : "admin",
    // password : 'rootroot',
    // port : 3306,
    dialect : 'mysql',
    host : 'database-2.coruaa6qnwci.us-east-1.rds.amazonaws.com',
    models : [__dirname + './modelsTypescript']
    //models : [emp]
});
 

try{
    sequelize.authenticate().then(async () => {
        console.log("db connection success");
        const sam = await sequelize.sync({force : true});
        console.log(sam);
        console.log("table created");
    }).catch((err) => {
        console.log(err);
    })
}catch(err){
    console.log(err);
}

// try{
//     sequelize.sync().then(sam => {
//         console.log(sam);
//     });
//     //console.log(sam);
//     console.log("table created");
// }catch(err){
//     console.log(err);
// }
