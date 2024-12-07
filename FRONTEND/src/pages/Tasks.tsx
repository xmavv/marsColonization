import TaskTable from "../features/tasks/TaskTable";
import ButtonGoBack from "../ui/ButtonGoBack";
import TableWrapper from "../ui/TableWrapper";

function Tasks() {
  return (
    <>
      <TableWrapper>
        <TaskTable />
      </TableWrapper>
      <ButtonGoBack />
    </>
  );
}

export default Tasks;
