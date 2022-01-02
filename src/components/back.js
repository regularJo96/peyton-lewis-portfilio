function Back(props){
  const back = (
    <div className={props.class}>
      <span className="material-icons md-48 topLeft" data-toggle="tooltip" data-placement="right" title="go back">
        navigate_before
      </span>
    </div>
  )

  return back;
}

export default Back;