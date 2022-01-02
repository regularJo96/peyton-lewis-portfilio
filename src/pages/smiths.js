import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";

function Smiths(){
  const block = (
    <body onLoad={ScrollToTop} className="bg-black text-white">
      <div className="d-flex flex-column">
        <Link to="/plportfolio" className="sticky-top"><Back class="menu white"/></Link>
        <header className="display-2 text-light text-center">Some of My Best Friends are Smiths</header>

        <div className="smiths-gallery">
          <img className="img-fluid pic1 border border-white border-2" src={pictures[2]}/>
          <img className="img-fluid pic2 border border-white border-2" src={pictures[3]}/>
          <img className="img-fluid pic3 border border-white border-2" src={pictures[4]}/>
        </div>
      </div>
    </body>
  )

  return block;
}

export default Smiths;