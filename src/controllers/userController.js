import UserModel from "../models/userSchema";

export const createUser = async (req, res) => {
  try {
    // get the user info from the body
    const data = await req.body;
    //create a new user then save
    const user = await UserModel.create(data);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User creation failed",
        error: "Unable get created user",
      });
    }
    return res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
