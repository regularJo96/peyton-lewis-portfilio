import {Link} from "react-router-dom";
import Back from '../components/back';

function About(){
  const about = (
    <>
      
      <div className="block d-flex flex-column text-light">
        <Link to="/plportfolio" className="sticky-top"><Back class="black"/></Link>
        <div className="container">
          <p className="display-1 text-center text-black">Peyton Lewis</p>
        </div>
      </div>
    </>
  )

  return about;
}

export default About;