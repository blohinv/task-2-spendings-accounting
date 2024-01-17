import "./style.scss";

const CustomInput = ({ 
  description, 
  additionalClass, 
  handleChangeInput, 
  name,
  value, 
  textType,
  errorInputs
}) => {
  return (
    <div className="custom-input">
      <p className="custom-input__description">{`${description}:`}</p> 
      <input                                      
        className={`custom-input__value ${additionalClass} ${errorInputs.includes(name) ? "input_empty" : ""}`}
        type={textType}
        value={value}
        onChange={(event) => handleChangeInput(name, event.target.value)}
        placeholder={description}
      />
      <p className="custom-input__error-message">
        {errorInputs.includes(name) ? "Неверный формат или заполните пустое поле!" : ""}
      </p>
    </div>
  )
}

export default CustomInput;
