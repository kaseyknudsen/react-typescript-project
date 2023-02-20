import { FormControl, InputLabel, OutlinedInput, Button, Grid } from "@mui/material";
import "./styles.scss";

interface Props {
  todo: string;
  // this is copied from hovering over the setToDo type
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setToDo, handleAdd }: Props) => {
  //OR like this... const InputField: React.FC<Props> ({ todo, setToDo }) => {
  return (
    <>
      <FormControl margin="normal">
        <InputLabel htmlFor="task">Task</InputLabel>
        <OutlinedInput
          id="task"
          // defaultValue="Enter Task Here"
          label="Task"
          value={todo}
          type="input"
          onChange={(e) => setToDo(e.target.value)}
          sx={{marginRight: '8px'}}
        />
      </FormControl>
      <Button
        onClick={handleAdd}
        variant="contained"
        type="submit"
  
        sx={{ marginTop: "5px" }}
      >
        Go
      </Button>
      
    </>
  );
};

export default InputField;
