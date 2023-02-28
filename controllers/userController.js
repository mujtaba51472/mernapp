import userModel from "../modals/userModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check if one field missing
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    //  check if user exists
    const userExits = await userModel.findOne({ email });
    if (userExits) {
      res.status(400).send("User already Exists");
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.status(200).json({
        message: "User Registered",
        _id: user._id,
        email: user.email,
        name: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.json(400).send("InValid user data");
    }

    // send to client
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // check user email
  const user = await userModel.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }
};

const getMe = async (req, res) => {
  console.log('usss' , req.user)
  const {_id , email , name} = await userModel.findById(req.user._id)
  res.status(200).json({
    name , 
    email ,
    id: _id

  })

};

// generateToken

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export { registerUser, loginUser, getMe };
