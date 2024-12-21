import UserTable from "../features/users/UserTable";
import ButtonGoBack from "../ui/ButtonGoBack";
import { pageAnimation } from "../ui/pageAnimation";
import TableWrapper from "../ui/TableWrapper";

import { motion } from "framer-motion";

function Users() {
  return (
    <motion.div {...pageAnimation}>
      <TableWrapper>
        <UserTable />
      </TableWrapper>
      <ButtonGoBack />
    </motion.div>
  );
}

export default Users;
