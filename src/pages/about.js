import {Link} from "react-router-dom";
import Back from '../components/back';

function About(){
  const about = (
    <>
      
      <div className="block d-flex flex-column text-light">
        <Link to="/plportfolio" className="sticky-top"><Back class="black"/></Link>
        <div className="container">
          <header className="display-1 text-center text-black">Peyton Lewis</header>
          <p className="text-center text-black m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Enim nec dui nunc mattis enim ut. Viverra vitae congue eu
            consequat ac felis donec et. Vitae turpis massa sed elementum tempus egestas sed sed risus. Senectus et netus et malesuada fames 
            ac turpis. Leo urna molestie at elementum eu facilisis sed. Iaculis nunc sed augue lacus viverra vitae congue eu. Eget nunc scelerisque 
            viverra mauris in. Adipiscing elit duis tristique sollicitudin nibh. Ultrices eros in cursus turpis massa tincidunt dui. Ante in nibh mauris 
            cursus mattis molestie. Enim blandit volutpat maecenas volutpat. Ipsum dolor sit amet consectetur. Vulputate odio ut enim blandit volutpat 
            maecenas volutpat. Tortor id aliquet lectus proin nibh nisl. Eget nulla facilisi etiam dignissim diam. Et egestas quis ipsum suspendisse ultrices.
          </p>
        </div>
      </div>
    </>
  )

  return about;
}

export default About;

