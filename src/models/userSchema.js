import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: 50,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: String,
    required: true,
  },
  // role: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "roles",
  // },
});

const UserModel = model("users", userSchema);

export default UserModel;
