"use server";

import User from "../models/User";

import { dbConnect } from "../dbConnect/dbConnect";
import { revalidatePath } from "next/cache";

//POST
export const createNewUser = async (formData) => {
  try {
    await dbConnect();

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    const saveUser = await new User(data).save();
    console.log("saveUser", saveUser);
    revalidatePath("/");
  } catch (error) {
    return {
      error: "there was an error saving",
    };
  }
};

//PUT/PATCH UPDATE USER
export const updateUser = async (formData) => {
  try {
    await dbConnect();
    const id = formData.get("id");

    const isUserExist = await User.findOne({ _id: id });

    if (!isUserExist) {
      return {
        error: "no user exists",
      };
    } else {
      const name = formData.get("name");
      const email = formData.get("email");

      const response = await User.findByIdAndUpdate(
        id,
        {
          $set: { name, email },
        },
        { new: true }
      );

      if (!response) {
        return {
          error: "user not updated",
        };
      } else {
        revalidatePath("/user/${id}");
      }
    }
  } catch (error) {
    return {
      error: "there was an error saving",
    };
  }
};

//GET
export const showUsers = async ({ search }) => {
  try {
    await dbConnect();
    let response;

    if (search) {
      const regex = new RegExp(search, "i");
      response = await User.find({
        $or: [{ name: { $regex: regex } }, { email: { $regex: regex } }],
      });
    } else {
      response = await User.find().exec();
    }
    console.log("user response", response);
    return response;
  } catch (error) {
    return {
      error: "there was an error showing",
    };
  }
};

//GET SINGLE USER
export const getUserById = async (id) => {
  try {
    await dbConnect();
    const response = await User.findOne({ _id: id });
    return response;
  } catch (error) {
    return {
      error: "there was an error showing",
    };
  }
};

//DELETE SERVER
export const deleteUserServerAction = async (formData) => {
  try {
    await dbConnect();
    const data = { id: formData.get("id") };

    const result = await User.findByIdAndDelete(data?.id);
    revalidatePath("/");
  } catch (error) {
    return {
      error: "there was an error deleting",
    };
  }
};

//DELETE
export const deleteUser = async (id) => {
  try {
    await dbConnect();

    const result = await User.findByIdAndDelete(id);

    revalidatePath("/");
  } catch (error) {
    return {
      error: "there was an error deleting",
    };
  }
};
