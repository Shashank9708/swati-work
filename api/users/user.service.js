const pool = require("../../config/database");

module.exports={
    create:(data,callBack)=>{
        pool.query(
            `insert into registration(firstname,lastname,gender,email,password,number)'
            values(?,?,?,?,?,?)`,
            

            [ data.first_name,
              data.last_name,
              data.gender,
              data.email,
              data.number,
             ],
             (error,result,fields)=>{
                 if(error){
                     return callBack(error);
                 }
                 return callBack(null,result);
             }
            
        );
    }
};