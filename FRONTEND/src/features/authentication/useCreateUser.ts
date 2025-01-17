import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser as createUserApi } from "../../services/apiUsers";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useCreateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createUser, isPending } = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => createUserApi(username, password),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/login");
      toast.success("sign up successfully! now please login", {
        theme: "colored",
      });
    },

    onError: (err) => {
      toast.error(err.message, { theme: "colored" });
    },
  });

  return { createUser, isPending };
}
