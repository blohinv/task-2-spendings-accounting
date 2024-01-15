import { useState } from "react";
import "./style.scss";

const SpendingsInput = ({ 
  description, 
  additionalClass, 
  handleChangeInput, 
  name,
  value, 
  textType,
  errorInputs
}) => {
  return (
    <div className="spendings-input">
      <p className="spendings-input__description">{`${description}:`}</p> {/*<----- !ТУТ ДВОЕТОЧИЕ! ПОЭТОМУ В СКОБКАХ! ПОЗЖЕ ЭТОТ КОММЕНТ УДАЛЮ */}
      <input                                      /* ПРЯМ ВОТ ТУТ ^ */
        className={`spendings-input__value ${additionalClass} ${errorInputs.includes(name) ? "input_empty" : ""}`}
        type={textType}
        value={value}
        onChange={(event) => handleChangeInput(name, event.target.value)}
        placeholder={description}
      />
      <p className="spendings-input__error-message">
        {errorInputs.includes(name) ? "Заполните пустое поле!" : ""}
      </p>
    </div>
  )
}

export default SpendingsInput;
