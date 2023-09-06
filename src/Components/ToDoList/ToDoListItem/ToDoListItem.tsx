import {ToDo} from "../../../models/todo-item";
import {ToDoItem, ToDoItemBtns, ToDoItemBtn, ToDoItemText} from "./ToDoListItem.styled";

import checkIcon from '../../../assets/images/check.png';
import uncheckIcon from '../../../assets/images/uncheck.png';
import trashIcon from '../../../assets/images/trash.png';

export const ToDoListItem = (props: { toDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {
  return (
    <ToDoItem>
      <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
      <ToDoItemBtns>
        <ToDoItemBtn
          icon={trashIcon}
          onClick={() => props.deleteToDo(props.toDoItem)}
        ></ToDoItemBtn>
        <ToDoItemBtn
          icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
          onClick={() => props.updateToDo(props.toDoItem)}
        ></ToDoItemBtn>
      </ToDoItemBtns>
    </ToDoItem>
  );
}
