import './assets/custom.scss';
import './assets/App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home'
import CharlieBrown from './pages/charlieBrown'
import NoPage from './pages/noPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/peyton-lewis-portfolio" element={<Home/>}/>
        <Route path="/You're-a-Good-Man-Charlie-Brown" element={<CharlieBrown/>}/>
        <Route path="/Some-of-My-Best-Friends-are-Smiths"/>
        <Route path="/Roald-Dahl's-Willy-Wonka"/>
        <Route path="/Curious-Savage"/>
        <Route path="/The-Sound-of-Music"/>
        <Route path="/Anatomy-of-Gray"/>
        <Route path="/Don't-Be-Afraid-of-the-Dark"/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>

   
    
  );
}

export default App;