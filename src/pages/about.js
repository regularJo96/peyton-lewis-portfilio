import {Link} from "react-router-dom";
import Back from '../components/back';

function About(){
  const about = (
    <>
      
      <div className="d-flex flex-column text-light">
        <Link to="/plportfolio" className="sticky-top"><Back class="text-black"/></Link>
        <div className="container">
          
          <header className="h1 text-center text-black fw-bold mb-4">Peyton Lynn Lewis</header>
          <header className="h4 text-center text-black fw-bold mb-5">Actor</header>
          <header className="border-top border-dark"></header>
          <header className="h6 text-center text-black fw-bold mt-3">Personal Information</header>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start">(901)258-8424</p>
            <p className="container-fluid text-dark text-end">5'7"/158lb</p>
          </div>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start">Pllewis@mail.lipscomb.edu</p>
            <p className="container-fluid text-dark text-end">Alto</p>
          </div>
          <header className="border-top border-dark"></header>
          <header className="h6 text-center text-black fw-bold mt-3">Education</header>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start">First Assembly Christain School (Memphis, TN)</p>
            <p className="container-fluid text-dark text-end">Class of 2021</p>
          </div>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start">Lipscomb University</p>
            <p className="container-fluid text-dark text-end">Class of 2025</p>
          </div>

          <header className="border-top border-dark"></header>
          <header className="h6 text-center text-black fw-bold mt-3">Theater</header>
          <div className="d-flex flex-row"> 
            <div className="h6 container-fluid text-dark p-2 text-start">Production</div>
            <div className="h6 container-fluid text-dark p-2 text-center">Part</div>
            <p className="h6 container-fluid text-dark p-2 text-end">Year</p>
          </div>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start fst-italic">Honk!</p>
            <p className="container-fluid text-dark text-center fst-italic">Ensemble</p>
            <p className="container-fluid text-dark text-end">2015-2016</p>
            
          </div>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start fst-italic">You’re a Good Man Charlie Brown</p>
            <p className="container-fluid text-dark text-center fst-italic">Snoopy</p>
            <p className="container-fluid text-dark text-end">2017-2018</p>
          </div>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start fst-italic">Some of My Best Friends are Smiths</p>
            <p className="container-fluid text-dark text-center fst-italic">Shirley Robinson</p>
            <p className="container-fluid text-dark text-end">2017-2018</p>
          </div>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start fst-italic">Roald Dahl's Willy Wonka</p>
            <p className="container-fluid text-dark text-center fst-italic">Grandma Josephine</p>
            <p className="container-fluid text-dark text-end">2018-2019</p>
          </div>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start fst-italic">Curious Savage</p>
            <p className="container-fluid text-dark text-center fst-italic">Ethel P. Savage</p>
            <p className="container-fluid text-dark text-end">2019-2020</p>
          </div>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start fst-italic">The Sound of Music</p>
            <p className="container-fluid text-dark text-center fst-italic">Student Director</p>
            <p className="container-fluid text-dark text-end">2019-2020</p>
          </div>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start fst-italic">Anatomy of Gray</p>
            <p className="container-fluid text-dark text-center fst-italic">Director</p>
            <p className="container-fluid text-dark text-end">2020-2021</p>
          </div>

          <div className="d-flex flex-row">
            <p className="container-fluid text-dark text-start fst-italic">Don't Be Afraid of the Dark</p>
            <p className="container-fluid text-dark text-center fst-italic">Sylvia Frye</p>
            <p className="container-fluid text-dark text-end">2021</p>
          </div>

          <header className="border-top border-dark"></header>
          <header className="h6 text-center text-black fw-bold mt-3">Special Skills</header>

          <div className="container text-dark">
              <ul>
                  <li>Spit take</li>
                  <li>British accent</li>
              </ul>
          </div>
        </div>
      </div>
    </>
  )

  return about;
}

export default About;

