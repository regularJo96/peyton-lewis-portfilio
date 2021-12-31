import '../assets/custom.scss';
import '../assets/App.scss';
import pictures from '../components/images.js';
import Picture from '../components/picture.js';

function CharlieBrown(){
  const block = (
    <div>
      <div className="block">
        <Picture path={pictures[0]} width={window.innerWidth}/>
      </div>

      <div className="block">
        <Picture path={pictures[1]} width={600}/>
      </div>
    </div>
  )

  return block;
}

export default CharlieBrown;