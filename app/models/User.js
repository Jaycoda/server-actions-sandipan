import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Anonymous",
      min: 2,
      max: 100,
      // required: [true, "Name must be provided"],
    },
    email: {
      type: String,
      match: /.+\@.+\..+/,
      min: 2,
      max: 100,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
// const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
