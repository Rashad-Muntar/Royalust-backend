import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        length: 6,
    },
    refreshToken: {
        type: String,
    }
})

const User = mongoose.model('User', userSchema);

export default User;