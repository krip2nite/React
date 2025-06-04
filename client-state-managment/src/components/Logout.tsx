import  { FC } from 'react'
interface Props {
    submitter: () => void
}
const Logout: FC<Props> = ({submitter}) => {
  return (
    <button onClick={() => submitter()}>Logout</button>
  )
}

export default Logout