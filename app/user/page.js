import Image from "next/image";
import NewUserForm from "../components/Users/NewUserForm";
import UserList from "../components/Users/UserList";
import UserSearch from "../components/Users/UserSearch";

export default function User({ searchParams }) {
  const search =
    typeof searchParams?.search == "string" ? searchParams?.search : undefined;

  // console.log("serverside search", search);

  return (
    <div className="bg-gray-50">
      <h1 className="text-3xl font-black text-center">User Registration</h1>

      <NewUserForm />
      <UserSearch search={search} />
      <UserList search={search} />
    </div>
  );
}
