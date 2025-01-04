import ButtonCta from "../../ui/ButtonCta";

import { motion } from "framer-motion";
import { pageAnimation } from "../../ui/pageAnimation";
import { Input, Label, UserData } from "./Form";

function LoginForm() {
  return (
    <motion.form {...pageAnimation}>
      <UserData>
        <div>
          <Label htmlFor="username">username</Label>
          <Input placeholder="e.g. xmavv" id="username" type="text" />
        </div>

        <div>
          <Label htmlFor="password">password</Label>
          <Input
            placeholder="e.g. admin' OR '1'='1 :)"
            id="password"
            type="password"
          />
        </div>
      </UserData>

      <ButtonCta rotate="0deg">LOGIN</ButtonCta>
    </motion.form>
  );
}

export default LoginForm;
