import User from "../models/User.js";

export const createAdmin = async (req, res) => {
  try {
    const { name, email, password, setupKey } = req.body;

    if (!process.env.ADMIN_SETUP_KEY ||
        setupKey !== process.env.ADMIN_SETUP_KEY) {
      return res.status(403).json({
        success: false,
        message: "Invalid setup key",
      });
    }

    const adminExists = await User.findOne({ role: "admin" });

    if (adminExists) {
      return res.status(409).json({
        success: false,
        message: "Admin account already exists",
      });
    }

    if (!name || !email || !password || password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Provide valid details. Password must be at least 8 characters.",
      });
    }

    const existingUser = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "This email is already registered as a customer",
      });
    }

    const admin = await User.create({
      name,
      email,
      password,
      role: "admin",
    });

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
