
import Brand from './components/Brand';
import Chatbar from './components/Chatbar'
import Digital from './components/Digital';
import Orbital from './components/Orbital';
import Social from './components/Social';
import Navbar from './components/Navbar';
import Artificium from './components/Artificium';
import Chat from './components/Chat';
import Library from './components/Library';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className='bg-[#131619]'>
      <div className='bg-[#131619]'>
      <Router>
        <Routes>
        <Route
            path="/"
            element={
              <>
                <Navbar />
                <Chatbar />
                <Orbital/>
                <Routes>
                  <Route path="/" element={<Artificium />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/library" element={<Library />} />
                </Routes>
              </>
            }
          />
        <Route path="/brand" element={
          <>
          <Navbar/>
          <Brand/>
        </>} />
        <Route path="/digital" element={
          <>
          <Navbar/>
          <Digital/>
        </>} />
        <Route path="/social" element={
          <>
          <Navbar/>
          <Social/>
        </>} />
        </Routes>
      </Router>
    </div>
    </div>
  )
}

export default App
