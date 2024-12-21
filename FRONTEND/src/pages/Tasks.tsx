import TaskTable from "../features/tasks/TaskTable";
import ButtonGoBack from "../ui/ButtonGoBack";
import { pageAnimation } from "../ui/pageAnimation";
import TableWrapper from "../ui/TableWrapper";

import { motion } from "framer-motion";

function Tasks() {
  return (
    <motion.div {...pageAnimation}>
      <TableWrapper>
        <TaskTable />
      </TableWrapper>
      <ButtonGoBack />
    </motion.div>
  );
}

export default Tasks;
