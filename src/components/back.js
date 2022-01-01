function Back(props){
  const back = (
    <a className={"menu "+props.class}>
      <span class="material-icons md-48 topLeft" data-toggle="tooltip" data-placement="right" title="go back">
        navigate_before
      </span>
    </a>
  )

  return back;
}

export default Back;