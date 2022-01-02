import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';
import ScrollToTop from "../scripts/toTop";


function Anatomy(){
  const block = (
    <body onLoad={ScrollToTop}>
      <div className="d-flex flex-column">
        <Link to="/plportfolio#Anatomy-of-Gray" className="sticky-top"><Back/></Link>
        <header className="display-2 text-light text-center">Anatomy of Gray</header>
        <div className="block justify-content-center ">
          <Picture path={pictures[15]} width={window.innerWidth/3}/>
        </div>

        <div className="block justify-content-center ">
          <Picture path={pictures[16]} width={window.innerWidth/1.5}/>
        </div>

        <div className="block justify-content-center ">
          <Picture path={pictures[17]} width={window.innerWidth/3}/>
        </div>

        <div className="block justify-content-center ">
          <Picture path={pictures[18]} width={window.innerWidth/1.5}/>
        </div>
      </div>
    </body>
  )

  return block;
}

export default Anatomy;