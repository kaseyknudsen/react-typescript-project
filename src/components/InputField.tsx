import { FormControl, InputLabel, OutlinedInput, Button } from "@mui/material";
import "./styles.scss";

interface Props {
  todo: string;
  // this is copied from hovering over the setToDo type
  setToDo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setToDo }: Props) => {
  //OR like this... const InputField: React.FC<Props> ({ todo, setToDo }) => {
  return (
    <>
      <FormControl margin="normal">
        <InputLabel htmlFor="task">Task</InputLabel>
        <OutlinedInput
          id="task"
          // defaultValue="Enter Task Here"
          label="Task"
          className="input_box"
          value={todo}
          onChange={(e)=>setToDo(e.target.value)}
        />
        <Button
          className="input_submit"
          variant="contained"
          size="small"
          style={{ marginTop: "10px" }}
        >
          Go
        </Button>
      </FormControl>
    </>
  );
};

export default InputField;
