import "./style.scss";

const AddButton = ({ addCost, buttonText }) => {
  return (
    <button
      className="add-button"
      type="button"
      onClick={addCost}
    >
      {buttonText}
    </button>
  )
}

export default AddButton;
