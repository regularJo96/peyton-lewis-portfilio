import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Copyright from '../components/copyright';
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";

function Smiths(){
  const block = (
    <>
      <div className="d-flex flex-column bg-black text-white">
        <Link to="/plportfolio" className="sticky-top"><Back class="text-white"/></Link>
        <header className="display-2 text-light text-center" onLoad={ScrollToTop}>Some of My Best Friends are Smiths</header>
        <p className="display-5 text-light text-center mb-5">2017-2018</p>
        <p className="display-5 text-light text-center mt-3">Shirley Robinson</p>

        <div className="smiths-gallery">
          <img className="img-fluid pic1 border border-white border-2" src={pictures[2]}/>
          <img className="img-fluid pic2 border border-white border-2" src={pictures[3]}/>
          <img className="img-fluid pic3 border border-white border-2" src={pictures[4]}/>
        </div>
        <Copyright background_color="bg-black" text_color="text-white"/>
      </div>
    </>
  )

  return block;
}

export default Smiths;