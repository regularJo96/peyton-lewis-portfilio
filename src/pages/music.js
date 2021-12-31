import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';


function Music(){
  const block = (
    <div className="d-flex flex-column">
      <Link to="/peyton-lewis-portfolio" className="sticky-top"><Back/></Link>
      <header className="display-2 text-light text-center">The Sound of Music</header>
      <div className="block justify-content-center ">
        <Picture path={pictures[13]} width={window.innerWidth/3}/>
      </div>

      <div className="block justify-content-center ">
        <Picture path={pictures[14]} width={window.innerWidth/1.5}/>
      </div>
    </div>
  )

  return block;
}

export default Music;