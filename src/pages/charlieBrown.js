import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';

function CharlieBrown(){
  const block = (
    <div className="d-flex flex-column bg-snoopy peanuts-font ">
      <Link to="/plportfolio" className="sticky-top"><Back class="black"/></Link>
      <header id="#top" className="display-2 text-dark text-center">You're a Good Man Charlie Brown</header>
      <div className="charlie-brown-gallery">
        <img className="img-fluid" src={pictures[1]}/>
        <img className="img-fluid" src={pictures[0]}/>
      </div>
      {/* <div className="block justify-content-center picture-1">
        <Picture path={pictures[1]} pictureType="picture-1"/>
      </div>

      <div className="block justify-content-center picture-2">
        <Picture path={pictures[0]} pictureType="picture-2"/>
      </div> */}

    </div>
  )

  return block;
}

export default CharlieBrown;