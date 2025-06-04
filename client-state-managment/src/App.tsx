import { useState } from "react"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Nav from "./components/Nav"


function App() {
  const [user, setUser] = useState<string>("")
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <Login submitter={(user) => setUser(user)} counter={counter} submitterCounter={(counter) => setCounter(counter)}></Login>
      <Logout submitter={() => setUser("")}></Logout>
      <Nav user={user} counter={counter}></Nav>
    </div>
  )
}

export default App
