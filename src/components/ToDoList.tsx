import { Todo } from "./model";
import "./styles.scss";
import SingleToDo from "./SingleToDo";

interface Props {
  toDoList: Todo[];
  // this is copied from hovering over the setToDo type
  setToDoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDoList, setToDoList }: Props) => {
  return (
    <div className="todos">
      {toDoList.map((toDo) => (
        <SingleToDo todo={toDo} toDoList={toDoList} key={toDo.id} setToDoList={setToDoList}/>
      ))}
    </div>
  );
};

export default ToDoList;
