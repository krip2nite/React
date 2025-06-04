import {FC, useRef} from 'react'
import useUserStore from '../state-management/store';

const Login: FC = () => {
    const login = useUserStore(s => s.login);
const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        login(inputRef.current?.value || "")
    }}>
        <input ref={inputRef} placeholder='Enter username' />
       
    </form>
  )
}

export default Login