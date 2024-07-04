import React from "react";
import { Button } from "@/components/ui/button";
import { deleteUserServerAction } from "@/app/actions/user";
import ActionButton from "./ActionButton";

const DeleteUserFormServerSide = ({ id }) => {
  return (
    <form action={deleteUserServerAction}>
      <input type="hidden" name="id" value={id} />
      <ActionButton title="Delete" />
    </form>
  );
};

export default DeleteUserFormServerSide;
