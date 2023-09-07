const User = require("../models/user");
const bcrypt = require("bcrypt");


exports.postRegister = async (req, res) => {
    try {
     
     const {Name, Username, Email, Password} = req.body;
  
     const exitingUser = await User.findOne({Email});
  
     if(exitingUser){
      res.send("user already exists");
     }
     
     const registerEmployee = new User ({
      Name, Username, Email, Password
     })
  
      const salt = await bcrypt.genSalt(10);
  
      registerEmployee.Password = await bcrypt.hash(
        registerEmployee.Password,
        salt
      );
     
      
      const registeredUser = await registerEmployee.save();
  
   
      res.status(201).render('login');
  
     
  
    } catch (err) {
      console.log(err.message);
    }
  };
  

  exports.getRegister = async (req, res) => {
    try {
      res.status(200).render("signup");
    } catch (err) {
      console.log(err.message);
    }
  };