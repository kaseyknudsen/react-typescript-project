import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
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
        />
        <Button
          onClick={handleAdd}
          variant="contained"
          size="small"
          type="submit"
          style={{ marginTop: "10px" }}
        >
          Go
        </Button>
      </FormControl>
    </>
  );
};

export default InputField;
