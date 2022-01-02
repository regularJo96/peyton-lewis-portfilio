import {Link} from "react-router-dom";
import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';
import Back from '../components/back';
import ToTop from '../scripts/toTop';


function Wonka(){
  const block = (
    <body onLoad={ToTop}>
    <div className="d-flex flex-column">
      <Link to="/plportfolio" className="sticky-top"><Back/></Link>
      <header className="display-2 text-light text-center">Roald Dahl's Willy Wonka</header>
      <div className="block justify-content-center ">
        <Picture path={pictures[5]} width={window.innerWidth/3}/>
      </div>

      <div className="block justify-content-center ">
        <Picture path={pictures[6]} width={window.innerWidth/1.5}/>
      </div>

      <div className="block justify-content-center ">
        <Picture path={pictures[7]} width={window.innerWidth/1.5}/>
      </div>
    </div>
    </body>
  )

  return block;
}

export default Wonka;