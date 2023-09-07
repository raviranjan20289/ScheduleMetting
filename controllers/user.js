const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

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

  exports.postLogin = async (req, res) => {
    try {
      const Email = req.body.Email;
      const Password = req.body.Password;
  
      const existingUser = await User.findOne({ Email: Email });
  
      if (!existingUser) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
  
      const isPasswordMatch = await bcrypt.compare(Password, existingUser.Password);
  
      if (!isPasswordMatch) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
      
      const token = jwt.sign({id: existingUser._id}, process.env.Secret_Key);
      res.cookie('jwt', token)
    

      res.send("welcome to the login page");
  
    } catch (err) {
      console.log(err.message);
    }
   
  };

  exports.login = async ( req, res) =>{
    res.render('login');
}
