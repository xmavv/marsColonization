import ButtonCta from "../../ui/ButtonCta";

import { motion } from "framer-motion";
import { pageAnimation } from "../../ui/pageAnimation";
import { Input, Label, UserData } from "./Form";
import { useLogin } from "./useLogin";
import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending } = useLogin();

  function handleLogin(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    login({ username, password });
  }

  return (
    <motion.form {...pageAnimation}>
      <UserData>
        <div>
          <Label htmlFor="username">username</Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="e.g. xmavv"
            id="username"
            type="text"
          />
        </div>

        <div>
          <Label htmlFor="password">password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="e.g. admin' OR '1'='1 :)"
            id="password"
            type="password"
          />
        </div>
      </UserData>

      <ButtonCta rotate="0deg" onClick={handleLogin} disabled={isPending}>
        LOGIN
      </ButtonCta>
    </motion.form>
  );
}

export default LoginForm;
