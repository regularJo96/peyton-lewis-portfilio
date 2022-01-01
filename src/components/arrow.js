function Arrow(props){
  const arrow = (
  <>
    <a href={'#'+props.jumpTo} className={props.class}>
      <span class={"material-icons position-absolute " + props.position + " start-50 translate-middle-x md-48"} data-toggle="tooltip" title={props.title}>
        {props.iconName}
      </span>
    </a>
  </>
  )
  return arrow;
}



export default Arrow;