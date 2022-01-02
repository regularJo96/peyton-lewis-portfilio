import '../assets/custom.scss';
import '../assets/App.scss';
import {Link} from "react-router-dom";

function Welcome(){
  const welcome = (
    <>
      <p className="display-1">HI, I'm Peyton.</p>
      <p className="display-1">I enjoy doing plays.</p>
      <p className="display-3">Scroll down or click the arrows to see my work.</p>
    </>
  )

  return welcome;
}

export default Welcome;