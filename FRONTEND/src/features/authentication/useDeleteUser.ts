import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "../../services/apiUsers";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

export function useDeleteUser() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isPending } = useMutation({
    mutationFn: () => deleteUserApi(user?.username as string),
    onSuccess: () => {
      toast.success("you have successfully deleted your account!", {
        theme: "colored",
      });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {},
  });

  return { deleteUser, isPending };
}
