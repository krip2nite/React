import { FC } from 'react'
interface Props {
    user: string;
    counter: number;
}
const Nav: FC<Props> = ({user, counter}) => {
  return (
    <div>
        <p>User: {user}</p>
        <p>Counter: {counter}</p>
    </div>
  )
}

export default Nav