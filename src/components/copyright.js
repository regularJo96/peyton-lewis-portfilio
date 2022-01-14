function Copyright(props){
  const copyright = (
    <>
      <div className={"position-relative container-fluid text-start font-size-12"+ " " + props.background_color + " " + props.text_color}>
        <span className="material-icons md-12">copyright</span> JoJo_Onion
      </div>

    </>
  )

  return copyright;
}

export default Copyright;