import "./App.css";
import { HomePage } from "./pages/Homepage/HomePage";
import {useData} from "./context/Data"
const App = () => {
    const {state} = useData()
    console.log(state)
  return (
      <div>
      
      </div>
  )
}

export default App;
