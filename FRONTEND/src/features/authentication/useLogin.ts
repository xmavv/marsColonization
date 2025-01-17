import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiUsers";
import { toast } from "react-toastify";
import { useAuth, User } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const { login: loginAuth } = useAuth();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => loginApi(username, password),

    onSuccess: (user: User) => {
      loginAuth(user);
      navigate("/app", { replace: true });
    },

    onError: (err) => {
      toast.error(err.message, { theme: "colored" });
    },
  });

  return { login, isPending };
}
