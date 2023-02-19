import { FormControl, OutlinedInput, InputLabel, Button} from '@mui/material';

interface Props {
    todo: string
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd2: (e: React.FormEvent) => void
}

export const InputField2 = ({todo, setToDo, handleAdd2}: Props) => {
  return (
    <>
    <FormControl margin='normal' sx={{marginTop: '100px'}}>
        <InputLabel htmlFor="task">Task</InputLabel>
        <OutlinedInput
        id="task" 
        value={todo}
        label="Task"
        onChange={(e) => setToDo(e.target.value)}
        />
    </FormControl>
    <Button 
    variant='contained' onClick={handleAdd2}>Go</Button>
    </>
  )
}

export default InputField2





