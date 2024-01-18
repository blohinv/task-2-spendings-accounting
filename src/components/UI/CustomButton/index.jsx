import "./style.scss";

const CustomButton = ({ actionButton, buttonText }) => {
  return (
    <button
      className="custom-button"
      type="button"
      onClick={actionButton}
    >
      {buttonText}
    </button>
  )
}

export default CustomButton;
