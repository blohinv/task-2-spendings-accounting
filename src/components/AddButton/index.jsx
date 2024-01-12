import "./style.scss";

const AddButton = ({ action, name }) => {
  return (
    <button
      className="add-button"
      type="button"
      onClick={() => action()}
    >
      {name}
    </button>
  )
}

export default AddButton;
