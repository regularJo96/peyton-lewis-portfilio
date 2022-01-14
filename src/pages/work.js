import '../assets/custom.scss';
import '../assets/App.scss';

function Work(props){
  const role = props.role;
  
  const workActor = (
    <>
      <p className="h1 mt-3">{props.role} in</p>
      <p className="display-1 mt-2 mb-2">{props.title}</p>
      <p className="display-6">{props.time}</p>
    </>
  )

  const workDirector = (
    <>
      <p className="h1 mt-3">{props.role}</p>
      <p className="display-1">{props.title}</p>
      <p className="display-6">{props.time}</p>
    </>
  )


  if(role == "Student Director" || role == "Director"){
    return workDirector;
  }
  return workActor;
}

export default Work;
