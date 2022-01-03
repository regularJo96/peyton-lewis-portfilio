import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";

function Savage(){
  const block = (
    <>
      <div className="d-flex flex-column bg-ethel">
        <Link to="/plportfolio" className="sticky-top"><Back class="text-ethelC"/></Link>
        <header className="display-2 text-ethelC text-center" onLoad={ScrollToTop}>Curious Savage</header>
        <p className="display-5 text-ethelC text-center mb-5">2019-2020</p>
        <p className="display-5 text-ethelC text-center mt-5">Ethel P. Savage</p>

        <div className="savage-gallery">
          <img className="img-fluid s-pic-1 border border-ethelC border-2" src={pictures[10]}/>
          <img className="img-fluid s-pic-2 border border-ethelC border-2 m-auto" src={pictures[11]}/>
          <img className="img-fluid s-pic-3 border border-ethelC border-2" src={pictures[9]}/>
          <img className="img-fluid s-pic-4 border border-ethelC border-2" src={pictures[8]}/>
          <img className="img-fluid s-pic-5 border border-ethelC border-2" src={pictures[12]}/>
        </div>
      </div>
    </>
  )

  return block;
}

export default Savage;