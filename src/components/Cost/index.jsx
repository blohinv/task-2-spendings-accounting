import { convertDate } from "../../helpers";
import editIcon from "../../img/edit-icon.svg";
import deleteIcon from "../../img/delete-icon.svg";
import "./style.scss";

const Cost = ({ 
  cost,
  index,
  startEdit,
  deleteCost
}) => {
  const { whereSpent, whenSpent, howMuchSpent, id } = cost;

  const dateConvertor = convertDate(whenSpent);
  const dateWhenSpent = dateConvertor.day + '/' + dateConvertor.month + '/' + dateConvertor.year;

  return (
    <div className="cost">
      <div className="cost-info">
        <p className="cost-info__text cost-where-spent">{`${index + 1}) ` + whereSpent}</p>
        <div className="cost-info-date-cost">
          <p className="cost-info__text cost-when-spent">{dateWhenSpent}</p>
          <p className="cost-info__text cost-how-much-spent">{`${howMuchSpent} р.`}</p>
        </div>
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
