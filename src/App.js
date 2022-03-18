import { Routes ,Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Homepage/HomePage";
<<<<<<< HEAD
import {useData} from "./context/Data"
=======
import { ProductPage } from "./pages/Product-Page/ProductPage";
>>>>>>> dev-product
const App = () => {
    const {state} = useData()
    console.log(state)
  return (
      <div>
<<<<<<< HEAD
      
=======
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/products" element = {<ProductPage/>}/>
        </Routes>
>>>>>>> dev-product
      </div>
  )
}

export default App;
