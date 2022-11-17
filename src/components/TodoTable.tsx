import { memo, VFC } from "react";
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

type TodoType = {
  id: number;
  title: string;
  progress: string;
  detail: string;
  createddate: number;
  updateddate: number;
};

type Props = {
  todos: TodoType[]; //todosはtodoを要素に持つ配列型なのでこのように指定できる
  todo: TodoType;
  handleEditClick: (todo: TodoType) => void;
  handleDeleteClick: (todoId: TodoType["id"]) => void;
};

export const TodoTable: VFC<Props> = memo((props) => {
  const { todos, todo, handleEditClick, handleDeleteClick } = props;

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
              {todos.map((todo) => {
                return (
                  <Tr key={todo.id}>
                    <Td>{todo.id}</Td>
                    <Td>{todo.title}</Td>
                    <Td>{todo.progress}</Td>
                    <Td>{todo.detail}</Td>
                    <Td>{todo.createddate}</Td>
                    <Td>{todo.updateddate}</Td>

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
