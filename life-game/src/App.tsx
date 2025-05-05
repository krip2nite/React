import Matrix from "./components/life-matrix/Matrix"
import lifeMatrixConfig from "./config/life-matrix.config";

const {rows, columns, interval} = lifeMatrixConfig;
function App() {

  return <div>
    <Matrix rows={rows} columns={columns} interval={interval}></Matrix>
  </div>
}

export default App