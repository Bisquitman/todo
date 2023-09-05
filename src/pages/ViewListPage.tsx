import {ToDo} from "../models/todo-item";
import {ListItem} from "../Components/ListItem/ListItem";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {Helmet, HelmetProvider} from "react-helmet-async";

export const ViewListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);

  return (
    <div className="container">
      <HelmetProvider>
        <Helmet>
          <title>Список дел</title>
        </Helmet>
      </HelmetProvider>
      {
        todoList.map((todo: ToDo, idx: number) => {
          return (<ListItem todo={todo} key={idx}/>)
        })
      }
    </div>
  );
}