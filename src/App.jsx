
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
      <Router>
        <Navbar />
        <Chatbar />
        <Orbital/>
        <Routes>
          <Route path="/" element={<Artificium />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/social" element={<Social />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
