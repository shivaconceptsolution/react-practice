import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addprops from "./Addprops"
import Subprops from "./Subprops"
import Multiprops from "./Multiprops"
import Divisionprops from "./Divisionprops"
import Operation from './Operation';
import Layout from './Layout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Operation />} />
          <Route path="add" element={<Addprops />} />
          <Route path="sub" element={<Subprops />} />
          <Route path="multi" element={<Multiprops />} />
          <Route path="div" element={<Divisionprops />} />
          </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
