import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";

function Music(){
  const block = (
    <body onLoad={ScrollToTop}>
      <div className="d-flex flex-column">
        <Link to="/plportfolio" className="sticky-top"><Back/></Link>
        <header className="display-2 text-light text-center">The Sound of Music</header>
        <div className="block justify-content-center ">
          <Picture path={pictures[13]} width={window.innerWidth/3}/>
        </div>

        <div className="block justify-content-center ">
          <Picture path={pictures[14]} width={window.innerWidth/1.5}/>
        </div>
      </div>
    </body>
  )

  return block;
}

export default Music;