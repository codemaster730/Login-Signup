const Button = (props) => {
  return (
      <div className="button-component">
        <button onClick={(ev) => props.onClick(ev)}>{props.field}</button>
      </div>
  )
}

export default Button;