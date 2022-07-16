const Input = (props) => {
  return (
      <div className="input-component">
        <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={(ev) => props.onChange(ev.target.value)} />
      </div>
  )
}

export default Input;