import reactDom from 'react-dom';
import ScrollToElement from '../scripts/toElement';
import {Link} from "react-router-dom";

function Menu(props){
  const menu = (
    <>
      <div className="dropdown">
        <a className={props.class} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="material-icons md-48" data-toggle="tooltip" title="menu">
            menu
          </span>
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          
          <li><a href="#You're-a-Good-Man-Charlie-Brown" className="dropdown-item">You're a Good Man Charlie Brown</a></li>
          <li><a href="#Some-of-My-Best-Friends-are-Smiths" className="dropdown-item">Some of My Best Friends are Smiths</a></li>
          <li><a href="#Roald-Dahl's-Willy-Wonka" className="dropdown-item">Roald Dahl's Willy Wonka</a></li>
          <li><a href="#Curious-Savage" className="dropdown-item">Curious Savage</a></li>
          <li><a href="#The-Sound-of-Music" className="dropdown-item">The Sound of Music</a></li>
          <li><a href="#Anatomy-of-Gray" className="dropdown-item">Anatomy of Gray</a></li>
          <li><a href="#Don't-Be-Afraid-of-the-Dark" className="dropdown-item">Don't Be Afraid of the Dark</a></li>
          <li><Link to="/About" className="dropdown-item">About Me.</Link></li>
        </ul>
      </div>

    </>
  )

  return menu;
}

export default Menu;