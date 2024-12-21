import UserTable from "../features/users/UserTable";
import { pageAnimation } from "../ui/pageAnimation";
import TableWrapper from "../ui/TableWrapper";

import { motion } from "framer-motion";

function Users() {
  return (
    <motion.div style={{ width: "100%" }} {...pageAnimation}>
      <TableWrapper>
        <UserTable />
      </TableWrapper>
    </motion.div>
  );
}

export default Users;
