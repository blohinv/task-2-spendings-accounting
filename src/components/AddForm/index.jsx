import "./style.scss";
import AddButton from "../UI/AddButton";
import SpendingsInput from "../UI/SpendingsInput";

const AddForm = ({ handleChangeInput, cost, addCost, errorInputs }) => {
  return (
    <div className="add-field">
      <SpendingsInput
        description="Куда было потрачено"
        additionalClass="wide"
        handleChangeInput={handleChangeInput}
        name="whereSpent"
        value={cost.whereSpent}
        textType="text"
        errorInputs={errorInputs}
      />
      <SpendingsInput
        description="Сколько было потрачено"
        additionalClass="average"
        handleChangeInput={handleChangeInput}
        name="howMuchSpent"
        value={cost.howMuchSpent}
        textType="number"
        errorInputs={errorInputs}
      />
      <AddButton addCost={addCost} buttonText="Добавить" />
    </div>
  )
}

export default AddForm;
