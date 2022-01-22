import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Copyright from '../components/copyright';
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";


function Anatomy(props){
  const block = (
    <>
      <div className="d-flex flex-column bg-dark">
        <Link to="/plportfolio" className="sticky-top"><Back class="text-light" coords={props.coords}/></Link>
        <header className="display-2 text-light text-center" onLoad={ScrollToTop}>Anatomy of Gray</header>
        <p className="display-5 text-light text-center mb-5">2020-2021</p>
        <p className="display-5 text-light text-center mt-3">Director</p>
      </div>
      <div className="anatomy-gallery bg-dark">
          <img className="img-fluid a-pic-1 border border-light border-2 w-100" src={pictures[15]}/>
          <img className="img-fluid a-pic-2 border border-light border-2" src={pictures[18]}/>
          <img className="img-fluid a-pic-3 border border-light border-2" src={pictures[16]}/>
          <img className="img-fluid a-pic-4 border border-light border-2 w-100" src={pictures[17]}/>
      </div>
      <Copyright background_color="bg-dark" text_color="text-light"/>
    </>
  )

  return block;
}

export default Anatomy;