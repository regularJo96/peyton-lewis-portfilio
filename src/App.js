import './assets/custom.scss';
import './assets/App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home1 from './pages/home1';
// import Home2 from './pages/home2';
import CharlieBrown from './pages/charlieBrown';
import Smiths from './pages/smiths';
import Wonka from './pages/wonka';
import Savage from './pages/savage';
import Music from './pages/music';
import Anatomy from './pages/anatomy';
import About from './pages/about';
import NoPage from './pages/noPage';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="btn-group">
        <button>helo</button>
      </div> */}
      <Routes>
        <Route path="/plportfolio" element={<Home1/>}/>
        <Route path="/plportfolio/version2" element={<Home2/>}/>
        <Route path="/You're-a-Good-Man-Charlie-Brown" element={<CharlieBrown/>}/>
        <Route path="/Some-of-My-Best-Friends-are-Smiths" element={<Smiths/>}/>
        <Route path="/Roald-Dahl's-Willy-Wonka" element={<Wonka/>}/>
        <Route path="/Curious-Savage" element={<Savage/>}/>
        <Route path="/The-Sound-of-Music" element={<Music/>}/>
        <Route path="/Anatomy-of-Gray" element={<Anatomy/>}/>
        <Route path="/Don't-Be-Afraid-of-the-Dark"/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>

   
    
  );
}

export default App;