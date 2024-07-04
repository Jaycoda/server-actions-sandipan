import { getUserById } from "@/app/actions/user";
import UpdateUserForm from "@/app/components/Users/UpdateUserForm";
import React from "react";

const EditUserPage = async ({ params }) => {
  const id = params?.userid;
  const userInformation = await getUserById(id);
  const user = userInformation && JSON.parse(JSON.stringify(userInformation));

  return (
    <div>
      <h1 className="text-3xl font-black text-center">Edit User</h1>

      {user && <UpdateUserForm user={user} />}

      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default EditUserPage;
