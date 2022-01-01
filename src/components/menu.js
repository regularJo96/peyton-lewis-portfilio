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
          
          <li><a href="#charlie" class="dropdown-item">You're a Good Man Charlie Brown</a></li>
          <li><a href="#shirley" class="dropdown-item">Some of My Best Friends are Smiths</a></li>
          <li><a href="#wonka" class="dropdown-item">Roald Dahl's Willy Wonka</a></li>
          <li><a href="#ethel" class="dropdown-item">Curious Savage</a></li>
          <li><a href="#music" class="dropdown-item">The Sound of Music</a></li>
          <li><a href="#anatomy" class="dropdown-item">Anatomy of Gray</a></li>
          <li><a href="#sylvia" class="dropdown-item">Don't Be Afraid of the Dark</a></li>
        </ul>
      </div>

    </>
  )

  return menu;
}

export default Menu;