import { FormControl, InputLabel, OutlinedInput, Button } from "@mui/material";
import "./styles.scss"

const InputField = () => {
  return (
    <>
      <FormControl margin="normal">
        <InputLabel htmlFor="task">Task</InputLabel>
        <OutlinedInput
          id="task"
          // defaultValue="Enter Task Here"
          label="Task"
        />
        <Button variant="contained" size="small" style={{marginTop: '10px'}} >Go</Button>
      </FormControl>
      
    </>
  );
};

export default InputField;
