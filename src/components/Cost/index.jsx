import editIcon from "../../img/edit-icon.svg";
import deleteIcon from "../../img/delete-icon.svg";
import "./style.scss";

const Cost = ({ cost, index }) => {
  return (
    <div className="cost">
      <div className="cost-info">
        <p className="cost-info__number">{`${index + 1})`}</p>
        <input 
          type="text"
          className="cost-info__where-spent"
          value={cost.whereSpent}
        />
        <input 
          type="text"
          className="cost-info__when-spent"
          value={cost.whenSpent}
        />
        <input 
          type="text"
          className="cost-info__how-much-spent"
          value={cost.howMuchSpent}
        />
      </div>
      <div className="cost-actions">
        <button 
          type="button"
          className="cost-actions__button"
          >
            <img 
              src={editIcon}
              alt="" 
              className="cost-actions__img"
            />
          </button>
          <button 
          type="button"
          className="cost-actions__button"
          >
            <img 
              src={deleteIcon}
              alt="" 
              className="cost-actions__img"
            />
          </button>
      </div>
    </div>
  )
}

export default Cost;