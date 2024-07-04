import { showUsers } from "@/app/actions/user";
import SingleUser from "./SingleUser";

const UserList = async ({ search }) => {
  const users = await showUsers({ search });

  return (
    <div className="p-5 bg-slate-100">
      {users !== undefined &&
        users.map((user, index) => <SingleUser key={index} user={user} />)}
    </div>
  );
};

export default UserList;
