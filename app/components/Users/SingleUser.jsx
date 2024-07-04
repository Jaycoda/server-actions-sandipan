import { showUsers } from "@/app/actions/user";
import { Button } from "@/components/ui/button";
import DeleteUserForm from "./DeleteUserForm";
import Link from "next/link";

const SingleUser = ({ user }) => {
  return (
    <div className="grid grid-cols-12 border-b py-2 items-center text-left bg-white px-4 gap-5">
      <div className="col-span-6 capitalize flex flex-col">
        <div>{user?.name}</div>

        <div className="text-xs">{user?.email}</div>
        <div className="text-xs">
          {user?.createdAt.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>

        <div className="text-xs">{user?._id.toString()}</div>
      </div>

      <div className="col-span-3 capitalize">
        <Link
          href={`user/${user?._id.toString()}`}
          className="bg-slate-900 text-white p-2  w-full flex justify-center rounded-md shadow-md hover:bg-slate-800"
        >
          Edit
        </Link>
      </div>

      <div className="col-span-3 capitalize">
        <DeleteUserForm id={user?._id.toString()} />
      </div>
    </div>
  );
};

export default SingleUser;
