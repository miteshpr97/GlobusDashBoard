import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./auth/Login/Login";
import { Dashboard } from "./Pages/Dashboard/Dashboard";

import GLCMA100200 from "./Pages/GLCMA100200/GLCMA100200";
import GLCMA100100 from "./Pages/GLCMA100100/GLCMA100100";
import GLCMA100300 from "./Pages/GLCMA100300/GLCMA100300";
import GLAMT100100 from "./Pages/GLAMT100100/GLAMT100100";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/UserCreation" element={<GLCMA100100 />}></Route>
        <Route path="/UserAccess" element={<GLCMA100200 />}></Route>
        <Route path="/CommonCode" element={<GLCMA100300 />}></Route>
        <Route path="/GLAMT100100" element={<GLAMT100100 />}></Route>
      </Routes>
    </>
  );
}

export default App;


