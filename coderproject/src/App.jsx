import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
  
  <>
      <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path= "/" element= {<ItemListContainer />} />

        <Route path= "/category/:id" element= {<ItemListContainer />} />

        <Route path= "/item/:id" element= {<ItemDetailContainer />} />

      </Routes>
      <ItemListContainer />
  
      </BrowserRouter>
  
  </>
  
  )
}

export default App
