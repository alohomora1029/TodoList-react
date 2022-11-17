import { memo, VFC } from "react";
import { useRecoilValue } from "recoil";
import { format } from "date-fns";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button
} from "@chakra-ui/react";

import { selectProgressState } from "../store/selectProgressState";

type TodoType = {
  id: number;
  title: string;
  progress: string;
  detail: string;
  createddate: number;
  updateddate: any;
};

type Props = {
  todo: TodoType;
  handleEditClick: (todo: TodoType) => void;
  handleDeleteClick: (todoId: TodoType["id"]) => void;
};

export const FilteredTable: VFC<Props> = memo((props) => {
  const { todo, handleEditClick, handleDeleteClick } = props;
  const FilteredTodoList = useRecoilValue(selectProgressState);
  const dueDate = todo.updateddate.toDate();

  return (
    <>
      <li key={todo.id}>
        <TableContainer width="auto">
          <Table variant="simple">
            <TableCaption>TodoList</TableCaption>
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>title</Th>
                <Th>progress</Th>
                <Th>detail</Th>
                <Th>created date</Th>
                <Th>updated date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {FilteredTodoList.map((todo) => {
                return (
                  <Tr key={todo.id}>
                    <Td>{todo.id}</Td>
                    <Td>{todo.title}</Td>
                    <Td>{todo.progress}</Td>
                    <Td>{todo.detail}</Td>
                    <Td>{todo.createddate}</Td>
                    <Td>
                      <time>{dueDate.format("yyyy-mm-dd")}</time>
                    </Td>
                    <Td>
                      <Button onClick={() => handleEditClick(todo)}>
                        編集
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        onClick={() => {
                          handleDeleteClick(todo.id);
                        }}
                      >
                        削除
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </li>
    </>
  );
});
