import { User } from "../models/user.model.js"


const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(404).json({ statusCode: 404, message: "Data not found!" })
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(409).json({ statusCode: 409, message: "User already exists!" })
    }

    const user = await User.create({
        name,
        email,
        password
    })


    const isCreatedUser = await User.findById(user?.id).select(
        "-password"
    )

    if (!isCreatedUser) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong while creating a user." })
    }

    return res.status(201).json({ statusCode: 201, message: "User Created Successfully!", data: isCreatedUser })
}


const loginUser = async (req, res) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(404).json({ statusCode: 404, message: "Data not found!" })
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(401).json({ statusCode: 401, message: "User does not exist!" })
    }
    
    const isPasswordValid = await user.isPasswordCorrect(password);
    
    if (!isPasswordValid){
        return res.status(401).json({ statusCode: 401, message: "Invalid Credentials" })
    }

    const loggedInUser = await User.findById(user._id).select("-password");

    return res.status(201).json({ statusCode: 201, message: "User Created Successfully!", data: loggedInUser})
}


export { registerUser, loginUser }






