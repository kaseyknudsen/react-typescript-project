import {
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Button,
  FormControl
} from "@mui/material";
import  EditIcon  from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { Todo } from "./model";


type Props = {
    todo: Todo;
    toDoList: Todo[]
    setToDoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleToDo = ({todo, toDoList, setToDoList}: Props) => {
  return (
//   <FormControl>
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography>This is a card</Typography>
      </CardContent>
    </Card>
    // </FormControl>
  );
};

export default SingleToDo;
