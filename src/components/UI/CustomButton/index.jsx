import "./style.scss";

const AddButton = ({ actionButton, buttonText }) => {
  return (
    <button
      className="add-button"
      type="button"
      onClick={actionButton}
    >
      {buttonText}
    </button>
  )
}

export default AddButton;
