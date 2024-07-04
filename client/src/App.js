import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from './auth/Login/Login';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import GLCMA100100 from './Pages/GLCMA100100';
import GLCMA100200 from './Pages/GLCMA100200';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>   
        <Route path='/UserCreation' element = {<GLCMA100100/>}></Route>
        <Route path='/UserAccess' element = {<GLCMA100200/>}></Route>
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
