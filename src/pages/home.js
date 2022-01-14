import Welcome from './welcome';
import Work from './work';
import Menu from '../components/menu';
import Copyright from '../components/copyright'
import Icon from '../components/icon';
import {Link} from "react-router-dom";

function Home(value){

  return (
    <div id="home" className="d-flex flex-column">
        <div id="header" className="sticky-top bg-light">
        
          <Menu class="text-dark" color="bg-light"/>
          <p id="welcome" className="display-1 text-center bg-light text-black">Peyton Lewis</p>
        </div>
        
      <div className="container-fluid bg-light text-center">

        <div className="container-fluid justify-content-center">
          <p id="welcome" className="display-3 text-center bg-light text-dark">Theater Education</p>
          <p id="welcome" className="display-3 text-center bg-light text-dark">Lipscomb University</p>
        </div>
      </div>

      <div id="You're-a-Good-Man-Charlie-Brown" className="position-relative container-fluid bg-snoopy text-center justify-content-center text-dark">
        <Work title="You're a Good Man Charlie Brown" time="2017-2018" role="Snoopy" route="/You're-a-Good-Man-Charlie-Brown"/>
        <Link to="/plportfolio/You're-a-Good-Man-Charlie-Brown" className="btn btn-dark w-25 mx-auto mb-3">Gallery</Link>
      </div>

      <div id="Some-of-My-Best-Friends-are-Smiths" className="position-relative container-fluid bg-black text-center justify-content-center text-white">
        <Work title="Some of My Best Friends are Smiths" time="2017-2018" role="Shirley Robinson" route="/Some-of-My-Best-Friends-are-Smiths"/>
        <Link to="/plportfolio/Some-of-My-Best-Friends-are-Smiths" className="btn btn-light w-25 mx-auto mb-3">Gallery</Link>
      </div>

      <div id="Roald-Dahl's-Willy-Wonka" className="position-relative container-fluid bg-purple text-center justify-content-center text-wonka">
        <Work title="Roald Dahl's Willy Wonka" time="2018-2019" role="Grandma Josephine" route="/Roald-Dahl's-Willy-Wonka"/>
        <Link to="/plportfolio/Roald-Dahl's-Willy-Wonka" className="btn btn-wonka w-25 mx-auto mb-3">Gallery</Link>
      </div>

      <div id="Curious-Savage" className="position-relative container-fluid bg-ethel text-center justify-content-center text-ethelC">
        <Work title="Curious Savage" time="2019-2020" role="Ethel P. Savage" route="/Curious-Savage"/>
        <Link to="/plportfolio/Curious-Savage" className="btn btn-ethelC w-25 mx-auto mb-3">Gallery</Link>
      </div>
      
      <div id="The-Sound-of-Music" className="position-relative container-fluid bg-green text-center justify-content-center text-light">
        <Work title="The Sound of Music" time="2019-2020" role="Student Director" route="/The-Sound-of-Music"/>
        <Link to="/plportfolio/The-Sound-of-Music" className="btn btn-light w-25 mx-auto mb-3">Gallery</Link>
      </div>
      
      <div id="Anatomy-of-Gray" className="position-relative container-fluid bg-dark text-center justify-content-center text-light">
        <Work title="Anatomy of Gray" time="2020-2021" role="Director" route="/Anatomy-of-Gray"/>
        <Link to="/plportfolio/Anatomy-of-Gray" className="btn btn-light w-25 mx-auto mb-3">Gallery</Link>
      </div>
      
      <div id="Don't-Be-Afraid-of-the-Dark" className="position-relative container-fluid bg-red text-center justify-content-center text-light">
        <Work title="Don't Be Afraid of the Dark" time="2021" role="Sylvia Frye" route="/Don't-Be-Afraid-of-the-Dark"/>
      </div>

      <Copyright/>
    </div>
  )
}

export default Home;