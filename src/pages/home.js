import Welcome from './welcome';
import Work from './workLink';
import Menu from '../components/menu';

function Home(){
  const home = (
    <div className="d-flex flex-column">

      <div className="block container-fluid bg-dark text-center justify-content-center text-light">
        <div class="topLeft">
          <Menu/>
        </div>
        <Welcome/>
      </div>

      <div id="charlie" className="block container-fluid bg-snoopy text-center justify-content-center text-dark">
        <Work title="You're a Good Man Charlie Brown" time="2017-2018" role="Snoopy" route="/You're-a-Good-Man-Charlie-Brown" color="white"/>
      </div>

      <div id="shirley" className="block container-fluid bg-shirley text-center justify-content-center text-shirleyC">
        <Work title="Some of My Best Friends are Smiths" time="2017-2018" role="Shirley Robinson" route="/Some-of-My-Best-Friends-are-Smiths"/>
      </div>

      <div id="wonka" className="block container-fluid bg-purple text-center justify-content-center text-wonka">
        <Work title="Roald Dahl's Willy Wonka" time="2018-2019" role="Grandma Josephine" route="/Roald-Dahl's-Willy-Wonka"/>
      </div>

      <div id="ethel" className="block container-fluid bg-ethel text-center justify-content-center text-ethelC">
        <Work title="Curious Savage" time="2019-2020" role="Ethel P. Savage" route="/Curious-Savage"/>
      </div>
     
      <div id="music" className="block container-fluid bg-green text-center justify-content-center text-light">
        <Work title="The Sound of Music" time="2019-2020" role="Student Director" route="/The-Sound-of-Music"/>
      </div>
      
      <div id="anatomy" className="block container-fluid bg-dark text-center justify-content-center text-light">
        <Work title="Anatomy of Gray" time="2020-2021" role="Director" route="/Anatomy-of-Gray"/>
      </div>
      
      <div id="sylvia" className="block container-fluid bg-red text-center justify-content-center text-light">
        <Work title="Don't Be Afraid of the Dark" time="2021" role="Sylvia Frye" route="/Don't-Be-Afraid-of-the-Dark"/>
      </div>

      <a className="text-center" name="linktotop">Back To Top</a>
      
    </div>
  )

  return home;
}

export default Home;