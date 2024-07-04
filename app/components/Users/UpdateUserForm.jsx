"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/app/actions/user";
import ActionButton from "./ActionButton";

const UpdateUserForm = ({ user }) => {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  return (
    <form
      action={updateUser}
      className="w-full flex flex-col gap-5 border p-5 shadow-lg bg-white my-10"
    >
      <input type="hidden" name="id" value={user?._id} />

      <label htmlFor="">Your Name</label>
      <Input
        required
        type="text"
        name="name"
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">Your Email</label>
      <Input
        required
        type="email"
        name="email"
        id=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <ActionButton title="Update" />
    </form>
  );
};

export default UpdateUserForm;
