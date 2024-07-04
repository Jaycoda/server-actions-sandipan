"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { deleteUser } from "@/app/actions/user";
import ActionButton from "./ActionButton";
import toast from "react-hot-toast";

const DeleteUserForm = ({ id }) => {
  const handleDeleteUser = async (event) => {
    event.preventDefault();

    const confirmation = window.confirm("Are you sure you want to delete");

    const response = await deleteUser(id);

    if (confirmation) {
      if (response?.error) {
        toast.error(response?.error);
      } else {
        toast.success("Delete user successful");
      }
    }
  };
  return (
    <form onSubmit={(event) => handleDeleteUser(event)}>
      <input type="hidden" name="id" value={id} />
      <ActionButton title="Delete" />
    </form>
  );
};

export default DeleteUserForm;
