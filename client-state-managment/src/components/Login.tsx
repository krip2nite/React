import {FC, useRef} from 'react'
interface Props {
    submitter: (user: string) => void;
    counter: number;
    submitterCounter: (counter: number)=>void
}

const Login: FC<Props> = ({submitter, submitterCounter, counter}) => {
const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        submitter(inputRef.current?.value || "");
        submitterCounter(counter + 1);

    }}>
        <input ref={inputRef} placeholder='Enter username' />
       
    </form>
  )
}

export default Login