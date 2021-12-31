import Welcome from './welcome';
import Work from './workLink';
import Menu from '../components/menu';
import {Link} from "react-router-dom";

function Home(){
  const home = (
    <div id="top" className="d-flex flex-column">
      
      <div className="position-relative block container-fluid bg-dark text-center justify-content-center text-light">
        <div class="position-absolute top-0 start-0">
          <Menu class="menu light"/>
        </div>
        <div className="container-fluid">
          <Welcome/>
          <a href="#charlie" className="menu light">
          <span class="material-icons position-absolute bottom-12 start-50 translate-middle-x md-48">
            arrow_downward
          </span>
        </a>
        </div>
      </div>

      <div id="charlie" className="position-relative block container-fluid bg-snoopy text-center justify-content-center text-dark border border-dark">
        <a href="#top" className="menu dark">
          <span class="material-icons position-absolute top-5 start-50 translate-middle-x md-48">
            arrow_upward
          </span>
        </a>
        <div class="position-absolute top-0 start-0">
          <Menu class="menu dark"/>
        </div>
        <Work title="You're a Good Man Charlie Brown" time="2017-2018" role="Snoopy" route="/You're-a-Good-Man-Charlie-Brown" color="white"/>
        <Link to="/You're-a-Good-Man-Charlie-Brown">Gallery</Link>
        <a href="#shirley" className="menu dark">
          <span class="material-icons position-absolute bottom-12 start-50 translate-middle-x md-48">
            arrow_downward
          </span>
        </a>
      </div>

      <div id="shirley" className="position-relative block container-fluid bg-shirley text-center justify-content-center text-shirleyC">
        <a href="#charlie" className="menu shirley">
          <span class="material-icons position-absolute top-5 start-50 translate-middle-x md-48">
            arrow_upward
          </span>
        </a>
        <div class="position-absolute top-0 start-0">
          <Menu class="menu shirley"/>
        </div>
        <Work title="Some of My Best Friends are Smiths" time="2017-2018" role="Shirley Robinson" route="/Some-of-My-Best-Friends-are-Smiths"/>
        <Link to="/Some-of-My-Best-Friends-are-Smiths">Gallery</Link>
        <a href="#wonka" className="menu shirley">
          <span class="material-icons position-absolute bottom-12 start-50 translate-middle-x md-48">
            arrow_downward
          </span>
        </a>
      </div>

      <div id="wonka" className="position-relative block container-fluid bg-purple text-center justify-content-center text-wonka">
        <a href="#shirley" className="menu wonka">
          <span class="material-icons position-absolute top-5 start-50 translate-middle-x md-48">
            arrow_upward
          </span>
        </a>
        <div class="position-absolute top-0 start-0">
          <Menu class="menu wonka"/>
        </div>
        <Work title="Roald Dahl's Willy Wonka" time="2018-2019" role="Grandma Josephine" route="/Roald-Dahl's-Willy-Wonka"/>
        <Link to="/Roald-Dahl's-Willy-Wonka">Gallery</Link>
        <a href="#ethel" className="menu wonka">
          <span class="material-icons position-absolute bottom-12 start-50 translate-middle-x md-48">
            arrow_downward
          </span>
        </a>
      </div>

      <div id="ethel" className="position-relative block container-fluid bg-ethel text-center justify-content-center text-ethelC">
        <a href="#wonka" className="menu ethel">
          <span class="material-icons position-absolute top-5 start-50 translate-middle-x md-48">
            arrow_upward
          </span>
        </a>
        <div class="position-absolute top-0 start-0">
          <Menu class="menu ethel"/>
        </div>
        <Work title="Curious Savage" time="2019-2020" role="Ethel P. Savage" route="/Curious-Savage"/>
        <Link to="/Curious-Savage">Gallery</Link>
        <a href="#music" className="menu ethel">
          <span class="material-icons position-absolute bottom-12 start-50 translate-middle-x md-48">
            arrow_downward
          </span>
        </a>
      </div>
     
      <div id="music" className="position-relative block container-fluid bg-green text-center justify-content-center text-light">
        <a href="#ethel" className="menu light">
          <span class="material-icons position-absolute top-5 start-50 translate-middle-x md-48">
            arrow_upward
          </span>
        </a>
        <div class="position-absolute top-0 start-0">
          <Menu class="menu light"/>
        </div>
        <Work title="The Sound of Music" time="2019-2020" role="Student Director" route="/The-Sound-of-Music"/>
        <Link to="/The-Sound-of-Music">Gallery</Link>
        <a href="#anatomy" className="menu light">
          <span class="material-icons position-absolute bottom-12 start-50 translate-middle-x md-48">
            arrow_downward
          </span>
        </a>
      </div>
      
      <div id="anatomy" className="position-relative block container-fluid bg-dark text-center justify-content-center text-light">
        <a href="#music" className="menu light">
          <span class="material-icons position-absolute top-5 start-50 translate-middle-x md-48">
            arrow_upward
          </span>
        </a>
        <div class="position-absolute top-0 start-0">
          <Menu class="menu light"/>
        </div>
        <Work title="Anatomy of Gray" time="2020-2021" role="Director" route="/Anatomy-of-Gray"/>
        <Link to="/Anatomy-of-Gray">Gallery</Link>
        <a href="#sylvia" className="menu light">
          <span class="material-icons position-absolute bottom-12 start-50 translate-middle-x md-48">
            arrow_downward
          </span>
        </a>
      </div>
      
      <div id="sylvia" className="position-relative block container-fluid bg-red text-center justify-content-center text-light">
        <a href="#anatomy" className="menu light">
          <span class="material-icons position-absolute top-5 start-50 translate-middle-x md-48">
            arrow_upward
          </span>
        </a>
        <div class="position-absolute top-0 start-0">
          <Menu class="menu light"/>
        </div>
        <Work title="Don't Be Afraid of the Dark" time="2021" role="Sylvia Frye" route="/Don't-Be-Afraid-of-the-Dark"/>
      </div>
      
    </div>
  )

  return home;
}

export default Home;