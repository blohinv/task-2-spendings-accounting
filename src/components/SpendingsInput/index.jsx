import "./style.scss";

const SpendingsInput = ({ description, additionalName, inputHandler, objKey, value, textType }) => {
  return (
    <div className="spendings-input">
      <p className="spendings-input__description">{`${description}:`}</p>
      <input
        className={`spendings-input__value ${additionalName}`}
        type={textType}
        value={value}
        onChange={(event) => inputHandler(objKey, event.target.value)}
        placeholder={description}
      />
    </div>
  )
}

export default SpendingsInput;
