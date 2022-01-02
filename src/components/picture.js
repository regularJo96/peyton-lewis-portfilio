function Picture(props){
  return <img src={props.path} className="img" className={"mx-auto d-block "+props.pictureType}/>
}

export default Picture;