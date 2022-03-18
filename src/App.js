import { Routes ,Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Homepage/HomePage";
import {useData} from "./context/Data"
import { ProductPage } from "./pages/Product-Page/ProductPage";
const App = () => {
  return (
      <div>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/products" element = {<ProductPage/>}/>
        </Routes>
      </div>
  )
}

export default App;
