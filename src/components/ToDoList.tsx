import { Todo } from "./model";
import "./styles.scss";

interface Props {
  toDoList: Todo[];
  // this is copied from hovering over the setToDo type
  setToDoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDoList, setToDoList }: Props) => {
  return (
    <div className="todos">
      {toDoList.map((toDo) => (
        <li>{toDo.todo}</li>
      ))}
    </div>
  );
};

export default ToDoList;
