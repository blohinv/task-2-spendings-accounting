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
    <div className="edit-cost">
      <div className="edit-cost-info">
        <input 
          type="text"
          className="edit-cost-info__text cost-where-spent edit-cost__input"
          value={costToEdit.whereSpent}
          onChange={(event) => handleChangeCostInfo('whereSpent', event.target.value)}
        />
        <div className="edit-cost-info-date-cost">
          <input 
            type="date"
            className="edit-cost-info__text cost-when-spent edit-cost__input"
            value={costToEdit.whenSpent}
            onChange={(event) => handleChangeCostInfo('whenSpent', event.target.value)}
          />
          <input 
            type="number"
            className="edit-cost-info__text cost-how-much-spent edit-cost__input"
            value={costToEdit.howMuchSpent}
            onChange={(event) => handleChangeCostInfo('howMuchSpent', event.target.value)}
          />
        </div>
      </div>
      <div className="edit-cost-actions">
        <button 
          type="button"
          className="edit-cost-actions__button"
          onClick={() => confirmEdit(costToEdit)}
        >
          <img 
            src={confirmIcon}
            alt="" 
            className="edit-cost-actions__img"
          />
        </button>
        <button 
          type="button"
          className="edit-cost-actions__button"
          onClick={() => cancelEdit(costToEdit)}
        >
          <img 
            src={cancelIcon}
            alt="" 
            className="edit-cost-actions__img"
          />
        </button>
      </div>
    </div>
  )
}

export default EditCost;
