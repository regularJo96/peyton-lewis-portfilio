function Icon(props){
  const icon = (
  <>
    <a href={'#'+props.jumpTo} className={props.class}>
      <span className={"material-icons position-absolute " + props.position + " start-50 translate-middle-x md-48"} data-toggle="tooltip" title={props.title}>
        {props.iconName}
      </span>
    </a>
  </>
  )
  return icon;
}

export default Icon;