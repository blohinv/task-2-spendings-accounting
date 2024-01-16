import editIcon from "../../img/edit-icon.svg";
import deleteIcon from "../../img/delete-icon.svg";
import "./style.scss";

const Cost = ({ 
  cost,
  index,
  startEdit,
  deleteCost,
  convertDate
}) => {
  const { whereSpent, whenSpent, howMuchSpent, id } = cost;

  const dateConvertor = convertDate(whenSpent);
  const dateWhenSpent = dateConvertor.day + '/' + dateConvertor.month + '/' + dateConvertor.year;

  return (
    <div className="cost">
      <div className="cost-info">
        <input 
          type="text"
          className="cost-info__text cost-where-spent"
          value={`${index + 1}) ` + whereSpent}
          readOnly
        />
        <input 
          type="text"
          className="cost-info__text cost-when-spent"
          value={dateWhenSpent}
          readOnly
        />
        <input 
          type="text"
          className="cost-info__text cost-how-much-spent"
          value={`${howMuchSpent} р.`}
          readOnly
        />
      </div>
      <div className="cost-actions">
        <button 
          type="button"
          className="cost-actions__button"
          onClick={() => startEdit(cost)}
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
          onClick={() => deleteCost(id)}
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