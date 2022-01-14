import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Copyright from '../components/copyright'
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";

function CharlieBrown(props){
  const block = (
    <>
      <div className="d-flex flex-column bg-snoopy">
        <Link to="/plportfolio" className="sticky-top"><Back class="text-black"/></Link>
        <header id="#top" className="display-2 text-dark text-center" onLoad={ScrollToTop}>You're a Good Man Charlie Brown</header>
        <p className="display-5 text-dark text-center mb-5">2017-2018</p>
        <p className="display-5 text-dark text-center mt-5">Snoopy</p>
        <p className="display-5 text-dark text-center mt-5">{props.state}</p>
        <div className="charlie-brown-gallery">
          <img className="img-fluid border border-dark border-2 m-auto" src={pictures[1]}/>
          <img className="img-fluid border border-dark border-2" src={pictures[0]}/>
        </div>

        <Copyright background_color="bg-snoopy" text_color="text-black"/>
      </div>
    </>

  )

  return block;
}

export default CharlieBrown;