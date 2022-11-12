import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import View_student from './pages/student/View_student';
import Create_student from './pages/student/Create_student';
import Edit_student from './pages/student/Edit_student';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<View_student/>} />
            <Route path='/Create_student' element={<Create_student/>} />
            <Route path='/Edit_student' element={<Edit_student/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
