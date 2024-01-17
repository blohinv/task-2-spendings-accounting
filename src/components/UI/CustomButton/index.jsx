import "./style.scss";

const CustomButton = ({ actionButton, buttonText }) => {
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

export default CustomButton;
