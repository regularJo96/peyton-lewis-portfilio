import {Link} from "react-router-dom";
import Back from '../components/back';

function About(){
  const about = (
    <>
      <Link to="/plportfolio" className="sticky-top"><Back class="light"/></Link>
      <div className="container">
        <p className="display-1 text-center text-white">Peyton Lewis</p>
      </div>
    </>
  )

  return about;
}

export default About;