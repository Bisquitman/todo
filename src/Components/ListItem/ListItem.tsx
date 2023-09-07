import {ToDo} from "../../models/todo-item";
import {ListItemLink} from "./ListItem.styled";

export const ListItem = ({todo}: { todo: ToDo }) => {
  return (
    <ListItemLink
      className={`${todo.isDone ? 'done' : 'notDone'}`}
      to={`/list/${todo.id}`}
    >
      {todo.text}
    </ListItemLink>
  );
}