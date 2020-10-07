const{create} = require("./user.service");
const{gensaltSync,hashSync}=require("bcrypt");

module.export={
    createUser:(req,res)=>{
        const body=req.body;
        const salt = gensaltSync(10);
        body.password=hashSync(body.password,salt);
        create(body,(err,result)=>{
            if(err)
            {
              console.log(err);
              return res.status(500).json({
                  success:0,
                  message:"database connection error"
              });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
        
    }
}