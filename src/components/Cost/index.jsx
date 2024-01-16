import editIcon from "../../img/edit-icon.svg";
import deleteIcon from "../../img/delete-icon.svg";
import "./style.scss";

const Cost = ({ cost, index, startEdit }) => {
  let date = new Date(cost.whenSpent);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;

  const whenSpent = day + '/' + month + '/' + year;

  return (
    <div className="cost">
      <div className="cost-info">
        <input 
          type="text"
          id="cost-where-spent"
          className="cost-info__text"
          value={`${index + 1}) ` + cost.whereSpent}
          readOnly={!cost.isEdit}
        />
        <input 
          type="text"
          id="cost-when-spent"
          className="cost-info__text"
          value={whenSpent}
          readOnly={!cost.isEdit}
        />
        <input 
          type="number"
          id="cost-how-much-spent"
          className="cost-info__text"
          value={`${cost.howMuchSpent} р.`}
          readOnly={!cost.isEdit}
        />
      </div>
      <div className="cost-actions">
        <button 
          type="button"
          className="cost-actions__button"
          onClick={startEdit}
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