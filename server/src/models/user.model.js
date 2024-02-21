import mongoose from 'mongoose';
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true // Adding index for faster query performance
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    }
}, {
    timestamps: true // Adding timestamps for createdAt and updatedAt fields
});


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        // if password is not changed by user then doesn't encrypt the password again
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};


export const User = mongoose.model("User", userSchema);