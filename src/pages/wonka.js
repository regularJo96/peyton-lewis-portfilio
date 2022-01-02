import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";


function Wonka(){
  const block = (
    <body onLoad={ScrollToTop} className="bg-purple">
      <div className="d-flex flex-column justify">
        <Link to="/plportfolio" className="sticky-top"><Back class="menu wonka"/></Link>
        <header className="display-2 text-light text-center text-wonka">Roald Dahl's Willy Wonka</header>
        <div className="wonka-gallery">
          <img className="img-fluid pic1 border border-wonka border-2" src={pictures[5]}/>
          <img className="img-fluid pic2 border border-wonka border-2" src={pictures[6]}/>
          <img className="img-fluid pic3 border border-wonka border-2" src={pictures[7]}/>
        </div>
      </div>
    </body>
  )

  return block;
}

export default Wonka;