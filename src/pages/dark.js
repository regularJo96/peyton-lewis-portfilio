import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Copyright from '../components/copyright';
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";

function Dark(){
  const block = (
    <>
      <div className="d-flex flex-column bg-red">
        <Link to="/plportfolio" className="sticky-top"><Back class="text-light"/></Link>
        <header className="display-2 text-light text-center" onLoad={ScrollToTop}>Don't Be Afraid of the Dark</header>
        <p className="display-5 text-light text-center mb-5">2021</p>
        <p className="display-5 text-light text-center mt-3">Sylvia Frye</p>

        <div className="dark-gallery">
          <img className="img-fluid d-pic-1 border border-light border-2 m-auto h-100" src={pictures[21]}/>
          <img className="img-fluid d-pic-2 border border-light border-2 m-auto h-100" src={pictures[20]}/>
          <img className="img-fluid d-pic-3 border border-light border-2 m-auto h-100" src={pictures[23]}/>
          <img className="img-fluid d-pic-4 border border-light border-2 m-auto h-100" src={pictures[19]}/>
          <img className="img-fluid d-pic-5 border border-light border-2 m-auto" src={pictures[22]}/>
          <img className="img-fluid d-pic-6 border border-light border-2 m-auto" src={pictures[24]}/>
        </div>
        <Copyright background_color="bg-red" text_color="text-light"/>
      </div> 
    </>
  )

 



  return block;
}

export default Dark;