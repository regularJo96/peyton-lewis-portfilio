import './assets/custom.scss';
import './assets/App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import CharlieBrown from './pages/charlieBrown';
import Smiths from './pages/smiths';
import Wonka from './pages/wonka';
import Savage from './pages/savage';
import Music from './pages/music';
import Anatomy from './pages/anatomy';
import Dark from './pages/dark';
import About from './pages/about';
import NoPage from './pages/noPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plportfolio" element={<Home coords="[0,0]"/>}/>
        <Route path="/plportfolio/You're-a-Good-Man-Charlie-Brown" element={<CharlieBrown/>}/>
        <Route path="/plportfolio/Some-of-My-Best-Friends-are-Smiths" element={<Smiths/>}/>
        <Route path="/plportfolio/Roald-Dahl's-Willy-Wonka" element={<Wonka/>}/>
        <Route path="/plportfolio/Curious-Savage" element={<Savage/>}/>
        <Route path="/plportfolio/The-Sound-of-Music" element={<Music/>}/>
        <Route path="/plportfolio/Anatomy-of-Gray" element={<Anatomy/>}/>
        <Route path="/plportfolio/Don't-Be-Afraid-of-the-Dark" element={<Dark/>}/>
        <Route path="/plportfolio/About" element={<About/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>

   
    
  );
}

export default App;