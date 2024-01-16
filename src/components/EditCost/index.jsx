import confirmIcon from "../../img/confirm-icon.svg";
import cancelIcon from "../../img/cancel-icon.svg";
import "./style.scss";

const EditCost = ({ 
  costToEdit,
  handleChangeCostInfo, 
  confirmEdit,
  cancelEdit
}) => {
  return (
    <div className="cost">
      <div className="cost-info">
        <input 
          type="text"
          className="cost-info__text cost-where-spent edit-cost"
          value={costToEdit.whereSpent}
          onChange={(event) => handleChangeCostInfo('whereSpent', event.target.value)}
        />
        <input 
          type="date"
          className="cost-info__text cost-when-spent edit-cost"
          value={costToEdit.whenSpent}
          onChange={(event) => handleChangeCostInfo('whenSpent', event.target.value)}
        />
        <input 
          type="number"
          className="cost-info__text cost-how-much-spent edit-cost"
          value={costToEdit.howMuchSpent}
          onChange={(event) => handleChangeCostInfo('howMuchSpent', event.target.value)}
        />
      </div>
      <div className="cost-actions">
        <button 
          type="button"
          className="cost-actions__button"
          onClick={() => confirmEdit(costToEdit)}
          >
            <img 
              src={confirmIcon}
              alt="" 
              className="cost-actions__img"
            />
          </button>
          <button 
          type="button"
          className="cost-actions__button"
          onClick={() => cancelEdit(costToEdit)}
          >
            <img 
              src={cancelIcon}
              alt="" 
              className="cost-actions__img"
            />
          </button>
      </div>
    </div>
  )
}

export default EditCost;
