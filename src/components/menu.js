import ScrollToElement from '../scripts/toElement';

function Menu(props){
  const menu = (
    <>
      <div class="dropdown">
        <a className={props.class} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="material-icons md-48" data-toggle="tooltip" title="menu">
            menu
          </span>
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          
          <li><a onClick={ScrollToElement("You're-a-Good-Man-Charlie-Brown")} href="#You're-a-Good-Man-Charlie-Brown" class="dropdown-item">You're a Good Man Charlie Brown</a></li>
          <li><a href="#Some-of-My-Best-Friends-are-Smiths" class="dropdown-item">Some of My Best Friends are Smiths</a></li>
          <li><a href="#Roald-Dahl's-Willy-Wonka" class="dropdown-item">Roald Dahl's Willy Wonka</a></li>
          <li><a href="#Curious-Savage" class="dropdown-item">Curious Savage</a></li>
          <li><a href="#The-Sound-of-Music" class="dropdown-item">The Sound of Music</a></li>
          <li><a href="#Anatomy-of-Gray" class="dropdown-item">Anatomy of Gray</a></li>
          <li><a href="#Don't-Be-Afraid-of-the-Dark" class="dropdown-item">Don't Be Afraid of the Dark</a></li>
        </ul>
      </div>

    </>
  )

  return menu;
}

export default Menu;