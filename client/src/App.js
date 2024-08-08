import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./auth/Login/Login";
import { Dashboard } from "./Pages/Dashboard/Dashboard";

import GLCMA100200 from "./Pages/GLCMA100200/GLCMA100200";
import GLCMA100100 from "./Pages/GLCMA100100/GLCMA100100";
import GLCMA100300 from "./Pages/GLCMA100300/GLCMA100300";
import GLAMAT001001 from "./Pages/GLAMT100100/GLAMT100100";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/UserCreation" element={<GLCMA100100 />}></Route>
        <Route path="/UserAccess" element={<GLCMA100200 />}></Route>
        <Route path="/CommonCode" element={<GLCMA100300 />}></Route>
        <Route path="/GLAMAT001001" element={<GLAMAT001001 />}></Route>
      </Routes>
    </>
  );
}

export default App;

// import './App.css';
// import { Routes, Route } from "react-router-dom";

// import Login from './auth/Login/Login';
// import DN from './Pages/Upload/ViewUpload/DN'
// import Upload from './Pages/Upload/Upload';
// import { Dashboard } from './Pages/Dashboard/Dashboard';
// import Header2 from './component/Header2';

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard/>}></Route>

//         {/* Nested Routes */}
//       <Route
//         path="/data"
//         element={
//           <>
//             <Header2 />
//             <Routes>
//               {/* Upload Route */}
//               <Route path="/upload" element={<Upload />} />
//               {/* DN Route */}
//               <Route path="/dn" element={<DN />} />
//             </Routes>
//           </>
//         }
//       />

//       </Routes>

//     </>
//   );
// }

// export default App;
