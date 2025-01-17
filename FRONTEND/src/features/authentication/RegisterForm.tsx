import ButtonCta from "../../ui/ButtonCta";

import { motion } from "framer-motion";
import { pageAnimation } from "../../ui/pageAnimation";
import { Input, Label, UserData } from "./Form";
import { useCreateUser } from "./useCreateUser";
import { useState } from "react";
import { isCorrectInput } from "../../utils/helpers";
import { toast } from "react-toastify";

function RegisterForm() {
  const { createUser, isPending } = useCreateUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    if (!isCorrectInput(username) || !isCorrectInput(password)) {
      toast.error("please, use only letters and numbers!", {
        theme: "colored",
      });
      return;
    }

    createUser({ username, password });
  }

  return (
    <motion.form {...pageAnimation}>
      <UserData>
        <div>
          <Label htmlFor="username">username</Label>
          <Input
            placeholder="e.g. xmavv"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="password">password</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="e.g. admin' OR '1'='1 :)"
            id="password"
            type="password"
          />
        </div>

        {/* <div>
          <Label htmlFor="confirmPassword">confirm password</Label>
          <Input
            placeholder="e.g. 12345"
            id="confirmPassword"
            type="password"
          />
        </div> */}
      </UserData>

      <ButtonCta rotate="0deg" disabled={isPending} onClick={handleSubmit}>
        REGISTER
      </ButtonCta>
    </motion.form>
  );
}

export default RegisterForm;
