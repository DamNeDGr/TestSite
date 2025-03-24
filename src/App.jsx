
import Content from './components/Content/Content'
import About from './components/Aboutme/AboutMe'
import Contact from './components/Contacts/Contact';
import Header from './components/Header/Header';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  return (
    <>
      <Header />
      <Routes>
    
      <Route path='/' element={<Content/>} />
      <Route path='https://test-site-h2si.vercel.app/about' element={<About/>} />
      <Route path='https://test-site-h2si.vercel.app/contact' element={<Contact/>} />

    </Routes>
    </>
    
  )
}

export default App
