import { FC } from 'react'
import useUserStore from '../state-management/store';

const Nav: FC= () => {
    const {user, counter} = useUserStore();
  return (
    <div>
        <p>User: {user}</p>
        <p>Counter: {counter}</p>
    </div>
  )
}

export default Nav