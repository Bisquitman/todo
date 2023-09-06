import {Form} from "../Components/Form/Form";
import {ToDoList} from "../Components/ToDoList/ToDoList";
import {ToDo} from "../models/todo-item";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {createAction, deleteAction, updateAction} from "../features/todoListSlice";

export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  const createNewToDo = (text: string) => {
    dispatch(createAction(text));
  };

  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem));
  };

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem));
  }

  return (
    <>
      <Form createNewToDo={createNewToDo}/>
      <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}