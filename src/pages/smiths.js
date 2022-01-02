import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';


function Smiths(){
  const block = (
    <>
    <div className="d-flex flex-column">
      <Link to="/plportfolio" className="sticky-top"><Back/></Link>
      <header className="display-2 text-light text-center">Some of My Best Friends are Smiths</header>
      <div className="block justify-content-center ">
        <Picture path={pictures[2]} width={window.innerWidth/3}/>
      </div>

      <div className="block justify-content-center ">
        <Picture path={pictures[3]} width={window.innerWidth/1.5}/>
      </div>

      <div className="block justify-content-center ">
        <Picture path={pictures[4]} width={window.innerWidth/1.5}/>
      </div>
    </div>
    </>
  )

  return block;
}

export default Smiths;