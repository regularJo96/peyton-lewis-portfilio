import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";


function Wonka(){
  const block = (
    <>
      <div className="d-flex flex-column justify bg-purple">
        <Link to="/plportfolio" className="sticky-top"><Back class="text-wonka"/></Link>
        <header className="display-2 text-light text-center text-wonka" onLoad={ScrollToTop}>Roald Dahl's Willy Wonka</header>
        <p className="display-5 text-wonka text-center mb-5">2018-2019</p>
        <p className="display-5 text-wonka text-center mt-5">Grandma Josephine</p>
        
        <div className="wonka-gallery">
          <img className="img-fluid pic1 border border-wonka border-2" src={pictures[5]}/>
          <img className="img-fluid pic2 border border-wonka border-2" src={pictures[6]}/>
          <img className="img-fluid pic3 border border-wonka border-2" src={pictures[7]}/>
        </div>
      </div>
    </>
  )

  return block;
}

export default Wonka;