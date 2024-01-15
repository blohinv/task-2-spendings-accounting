import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import "./style.scss";

const AddForm = ({ 
handleChangeInput,
  cost, 
  addCost, 
  errorInputs 
}) => {
  return (
    <div className="add-form">
      <CustomInput
        description="Куда было потрачено"
        additionalClass="wide"
        handleChangeInput={handleChangeInput}
        name="whereSpent"
        value={cost.whereSpent}
        textType="text"
        errorInputs={errorInputs}
      />
      <CustomInput
        description="Сколько было потрачено"
        additionalClass="average"
        handleChangeInput={handleChangeInput}
        name="howMuchSpent"
        value={cost.howMuchSpent}
        textType="number"
        errorInputs={errorInputs}
      />
      <CustomButton actionButton={addCost} buttonText="Добавить" />
    </div>
  )
}

export default AddForm;
