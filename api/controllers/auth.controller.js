import User from "../models/user.model.js";
import createError from "../utils/error.util.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * Function to check if Password meets following criterias -
 * Min-Length: 8, Max-length: 20
 * No Whitespaces
 * Atleast one Uppercase char, Lowercase char, digit and special symbol
 */
const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordRegex.test(password);
};

// Signup
export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!validatePassword(password)) {
        return next(new createError("Password does not meet given criteria", 400));
    }
    const hashedPassword = bcryptjs.hashSync(password, 12);
    const newUser = new User({ name, email, password: hashedPassword });

    try {
        await newUser.save();
        // For Testing Purposes
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        next(new createError(error.message, 400));
    }
}

// Login
export const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return next(new createError("User Not Found", 401));
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password);

        if (!isPasswordCorrect) {
            return next(new createError("Invalid email or password", 401));
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        // For Testing Purposes
        res.status(200).json({
            status: "success",
            message: "User logged in successfully",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        next(new createError(error.message, 400));
    }
};