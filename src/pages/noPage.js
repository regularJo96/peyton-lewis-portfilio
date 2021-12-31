import { Link } from "react-router-dom";

function Error(){
  const error = (
    <div className="block container-fluid bg-dark text-center text-light">
      <p className="display-1">404 Error</p>
      <p className="display-1">Page Not Found</p>
      <Link to='/peyton-lewis-portfolio'>Fix Your Mistake</Link>
    </div>
  )
  return error;
}

export default Error;