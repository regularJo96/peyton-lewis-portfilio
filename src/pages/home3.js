import Welcome from './welcome';
import Work from './work';
import Menu from '../components/menu';
import Icon from '../components/icon';
import {Link} from "react-router-dom";

function Home(){

  return (
    <div id="home" className="d-flex flex-column">
      
      <div className="sticky-top bg-dark">
        <h1 className="text-white">Work in progress. Scroll down a bit first to use the dropdown to switch to a different version</h1> 
        <Menu class="text-light" color="bg-light"/>
      </div>
      <div className="container-fluid bg-dark text-center text-light">
        <div className="container-fluid justify-content-center">
          <Welcome/>
        </div>
      </div>

      
    <div class="row">
      <div class="col-sm-6">
        <div class="card bg-snoopy">
          <div class="card-body">
            <Work title="You're a Good Man Charlie Brown" time="2017-2018" role="Snoopy" route="/You're-a-Good-Man-Charlie-Brown"/>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      
      <div class="col-sm-6">
        <div class="card bg-black">
          <div class="card-body text-white">
            <Work title="Some of My Best Friends are Smiths" time="2017-2018" role="Shirley Robinson" route="/Some-of-My-Best-Friends-are-Smiths"/>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card bg-purple">
          <div class="card-body text-wonka">
            <Work title="Roald Dahl's Willy Wonka" time="2018-2019" role="Grandma Josephine" route="/Roald-Dahl's-Willy-Wonka"/>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card bg-black">
          <div class="card-body text-white">
            <Work title="Curious Savage" time="2019-2020" role="Ethel P. Savage" route="/Curious-Savage"/>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card bg-black">
          <div class="card-body text-white">
            <Work title="The Sound of Music" time="2019-2020" role="Student Director" route="/The-Sound-of-Music"/>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home;