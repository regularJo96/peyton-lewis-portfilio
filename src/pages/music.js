import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";

function Music(){
  const block = (
    <>
      <div className="d-flex flex-column bg-green" onLoad={ScrollToTop}>
        <Link to="/plportfolio" className="sticky-top"><Back class="text-light"/></Link>
        <header className="display-2 text-light text-center">The Sound of Music</header>
        <p className="display-5 text-light text-center mb-5">2019-2020</p>
        <p className="display-5 text-light text-center mt-5">Student Director</p>
        <div className="music-gallery">
          <img className="img-fluid m-pic-1 border border-light border-2 m-auto" src={pictures[13]}/>
          <img className="img-fluid border m-pic-2 border-light border-2 m-auto" src={pictures[14]}/>
        </div>
      </div>
    </>
  )

  return block;
}

export default Music;