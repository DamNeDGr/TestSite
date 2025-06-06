import Header from "./components/Header/Header";
import Aboutme from "./pages/Aboutme/Aboutme";
import Contact from "./pages/Contact/Contact";
import Main from "./pages/Main/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router"; 
import MyWorks from "./pages/MyWorks/MyWorks";


 export function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/about' element={<Aboutme/>} />
        <Route path='/myworks' element={<MyWorks/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

