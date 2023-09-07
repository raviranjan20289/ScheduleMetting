const jwt = require('jsonwebtoken');


exports.authMiddleware= async (req, res, next) =>{


    try{
      
  
         let token = req.cookies.jwt;

    console.log(token);

      if (token) {
 
        let user = jwt.verify(token, process.env.Secret_Key);
     
        req.userId = user.id ;


     }
     return next();
    
   }catch(error){
      console.log(error);
     return res.status(401).json({message: "anuthorized user"})
    }
   }
