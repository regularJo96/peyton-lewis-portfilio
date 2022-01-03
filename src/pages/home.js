import Welcome from './welcome';
import Work from './work';
import Menu from '../components/menu';
import Arrow from '../components/arrow';
import {Link} from "react-router-dom";

function Home(){
  const home = (
    <div id="home" className="d-flex flex-column">
      
      <div className="position-relative block container-fluid bg-dark text-center justify-content-center text-light">
        <div className="position-absolute top-0 start-0">
          <Menu class="text-light"/>
        </div>
        <div className="container-fluid">
          <Welcome/>
          <Arrow jumpTo="You're-a-Good-Man-Charlie-Brown" class="text-light" iconName="arrow_downward" position="bottom-12" title="You're a Good Man Charlie Brown"/>
        </div>
      </div>

      <div id="You're-a-Good-Man-Charlie-Brown" className="position-relative block container-fluid bg-snoopy text-center justify-content-center text-dark peanuts-font">
        <Arrow jumpTo="top" class="text-dark" iconName="arrow_upward" position="top-0" title="Home"/>
        <div className="position-absolute top-0 start-0">
          <Menu class="text-dark"/>
        </div>
        <Work title="You're a Good Man Charlie Brown" time="2017-2018" role="Snoopy" route="/You're-a-Good-Man-Charlie-Brown"/>
        <Link to={{pathname:"/You're-a-Good-Man-Charlie-Brown", state:[document.getElementById("You're-a-Good-Man-Charlie-Brown")]}} className="btn btn-dark w-25 mx-auto">Gallery</Link>
        <Arrow jumpTo="Some-of-My-Best-Friends-are-Smiths" class="text-dark" iconName="arrow_downward" position="bottom-12" title="Some of My Best Friends are Smiths"/>

      </div>

      <div id="Some-of-My-Best-Friends-are-Smiths" className="position-relative block container-fluid bg-black text-center justify-content-center text-white">
        <Arrow jumpTo="You're-a-Good-Man-Charlie-Brown" class="text-light" iconName="arrow_upward" position="top-0" title="You're a Good Man Charlie Brown"/>
        <div className="position-absolute top-0 start-0">
          <Menu class="text-light"/>
        </div>
        <Work title="Some of My Best Friends are Smiths" time="2017-2018" role="Shirley Robinson" route="/Some-of-My-Best-Friends-are-Smiths"/>
        <Link to="/Some-of-My-Best-Friends-are-Smiths" className="btn btn-light w-25 mx-auto">Gallery</Link>
        <Arrow jumpTo="Roald-Dahl's-Willy-Wonka" class="text-light" iconName="arrow_downward" position="bottom-12" title="Roald Dahl's Willy Wonka"/>
      </div>

      <div id="Roald-Dahl's-Willy-Wonka" className="position-relative block container-fluid bg-purple text-center justify-content-center text-wonka">
        <Arrow jumpTo="Some-of-My-Best-Friends-are-Smiths" class="text-wonka" iconName="arrow_upward" position="top-0" title="Some of My Best Friends are Smiths"/>
        <div className="position-absolute top-0 start-0">
          <Menu class="text-wonka"/>
        </div>
        <Work title="Roald Dahl's Willy Wonka" time="2018-2019" role="Grandma Josephine" route="/Roald-Dahl's-Willy-Wonka"/>
        <Link to="/Roald-Dahl's-Willy-Wonka" className="btn btn-wonka w-25 mx-auto">Gallery</Link>
        <Arrow jumpTo="Curious-Savage" class="text-wonka" iconName="arrow_downward" position="bottom-12" title="Curious Savage"/>
      </div>

      <div id="Curious-Savage" className="position-relative block container-fluid bg-ethel text-center justify-content-center text-ethelC">
        <Arrow jumpTo="Roald-Dahl's-Willy-Wonka" class="text-ethelC" iconName="arrow_upward" position="top-0" title="Roald Dahl's Willy Wonka"/>
        <div className="position-absolute top-0 start-0">
          <Menu class="text-ethelC"/>
        </div>
        <Work title="Curious Savage" time="2019-2020" role="Ethel P. Savage" route="/Curious-Savage"/>
        <Link to="/Curious-Savage" className="btn btn-ethelC w-25 mx-auto">Gallery</Link>
        <Arrow jumpTo="The-Sound-of-Music" class="text-ethelC" iconName="arrow_downward" position="bottom-12" title="The Sound of Music"/>
      </div>
     
      <div id="The-Sound-of-Music" className="position-relative block container-fluid bg-green text-center justify-content-center text-light">
        <Arrow jumpTo="Curious-Savage" class="text-light" iconName="arrow_upward" position="top-0" title="Curious Savage"/>
        <div className="position-absolute top-0 start-0">
          <Menu class="text-light"/>
        </div>
        <Work title="The Sound of Music" time="2019-2020" role="Student Director" route="/The-Sound-of-Music"/>
        <Link to="/The-Sound-of-Music" className="btn btn-light w-25 mx-auto">Gallery</Link>
        <Arrow jumpTo="Anatomy-of-Gray" class="text-light" iconName="arrow_downward" position="bottom-12" title="Anatomy of Gray"/>
      </div>
      
      <div id="Anatomy-of-Gray" className="position-relative block container-fluid bg-dark text-center justify-content-center text-light">
        <Arrow jumpTo="The-Sound-of-Music" class="text-light" iconName="arrow_upward" position="top-0" title="The Sound of Music"/>
        <div className="position-absolute top-0 start-0">
          <Menu class="text-light"/>
        </div>
        <Work title="Anatomy of Gray" time="2020-2021" role="Director" route="/Anatomy-of-Gray"/>
        <Link to="/Anatomy-of-Gray" className="btn btn-light w-25 mx-auto">Gallery</Link>
        <Arrow jumpTo="Don't-Be-Afraid-of-the-Dark" class="text-light" iconName="arrow_downward" position="bottom-12" title="Don't Be Afraid of the Dark"/>
      </div>
      
      <div id="Don't-Be-Afraid-of-the-Dark" className="position-relative block container-fluid bg-red text-center justify-content-center text-light">
        <Arrow jumpTo="Anatomy-of-Gray" class="text-light" iconName="arrow_upward" position="top-0" title="Anatomy of Gray"/>
        <div className="position-absolute top-0 start-0">
          <Menu class="text-light"/>
        </div>
        <Work title="Don't Be Afraid of the Dark" time="2021" role="Sylvia Frye" route="/Don't-Be-Afraid-of-the-Dark"/>
      </div>
      
    </div>
  )

  return home;
}

export default Home;