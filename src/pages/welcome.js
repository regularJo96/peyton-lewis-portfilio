import '../assets/custom.scss';
import '../assets/App.scss'

function Welcome(){
  const welcome = (
    <>
      <p className="display-1">HI, I'm Peyton.</p>
      <p className="display-3">Scroll down or click the arrows to see my work.</p>
      <button className="btn btn-primary">Learn More About Me.</button>
    </>
  )

  return welcome;
}

export default Welcome;