import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createNewUser } from "@/app/actions/user";
import ActionButton from "./ActionButton";

const NewUserForm = () => {
  return (
    <form
      action={createNewUser}
      className="w-full flex flex-col gap-5 border p-5 shadow-lg bg-white my-10"
    >
      <label htmlFor="">Your Name</label>
      <Input required type="text" name="name" id="" />
      <label htmlFor="">Your Email</label>
      <Input required type="email" name="email" id="" />
      <ActionButton title="Submit" />
    </form>
  );
};

export default NewUserForm;
