import { useState, useEffect } from "react";
import { uid } from "uid";
import AddForm from "../AddForm";
import TotalPrice from "../TotalPrice";
import Cost from "../Cost";
import EditCost from "../EditCost";
import { convertDate } from "../../helpers";
import "./style.scss";

const MainPage = () => {
  const [cost, setCost] = useState({
    whereSpent: '',
    howMuchSpent: '',
    whenSpent: Date.now(),
    isEdit: false,
    id: uid()
  });
  const [costToEdit, setCostToEdit] = useState({});
  const [allCosts, setAllCosts] = useState([]);
  const [errorInputs, setErrorInputs] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const handleChangeInput = (name, value) => {
    setCost({ ...cost, [name]: value, whenSpent: Date.now() });
  }

  const handleChangeCostInfo = (key, value) => {
    setCostToEdit({ ...costToEdit, [key]: value });
  }

  const getAllCosts = () => {
    sortBySum([ ...Object.values(localStorage).map(value => JSON.parse(value))]);
  }

  const addCost = () => {
    errorInputs.forEach(() => {
      errorInputs.pop();
    });

    cost.howMuchSpent = Number(cost.howMuchSpent);

    checkIfEmpty();

    if (errorInputs.length === 0) {
      sortBySum([...allCosts, cost]);
      localStorage.setItem(`spending-${cost.id}`, JSON.stringify(cost));
      setCost({ 
        ...cost, 
        whereSpent: '', 
        howMuchSpent: Number(''), 
        id: uid() 
      });
    }

    calculateTotalSum();
  }

  const startEdit = (cost) => {
    if (Object.keys(costToEdit).length === 0) {
      cost.isEdit = true;
  
      const dateConvertor = convertDate(cost.whenSpent);
      const dateWhenSpent = dateConvertor.year + '-' + dateConvertor.month + '-' + dateConvertor.day;

      cost.whenSpent = dateWhenSpent;

      setCostToEdit(cost);
    }
  }

  const confirmEdit = (cost) => {
    if (costToEdit.whenSpent
      && costToEdit.whenSpent
      && costToEdit.howMuchSpent > 0
    ) {
      for (let i = 0; i < allCosts.length; i++) {
        if (allCosts[i].id === cost.id) {
          allCosts[i] = cost;
          allCosts[i].isEdit = false;
          allCosts[i].whenSpent = new Date(cost.whenSpent).getTime();
          break;
        }
      }
      
      sortBySum(allCosts);
      setCostToEdit({});
      
      localStorage.setItem(`spending-${cost.id}`, JSON.stringify(cost));
    }
  }

  const cancelEdit = (costCancel) => {
    for (let i = 0; i < allCosts.length; i++) {
      if (allCosts[i].id === costCancel.id) {
        allCosts[i].isEdit = false;
        break;
      }
    }
    
    setCostToEdit({});
  }

  const deleteCost = (id) => {
    sortBySum(allCosts.filter(cost => cost.id !== id));
    localStorage.removeItem(`spending-${id}`);
  }

  const checkIfEmpty = () => {
    if (!cost['whereSpent']) {
      errorInputs.push('whereSpent')
    }

    if (cost['howMuchSpent'] <= 0 
      || typeof cost['howMuchSpent'] !== 'number') {
      errorInputs.push('howMuchSpent');
    }

    setErrorInputs([ ...errorInputs ]);
  }

  const calculateTotalSum = () => {
    setTotalSum(allCosts.reduce((a, b) => a = a + Number(b.howMuchSpent), 0));
  }

  const sortBySum = (array) => {
    setAllCosts(array.sort((a, b) => a.howMuchSpent - b.howMuchSpent));
  }

  useEffect(() => {
    getAllCosts();
    calculateTotalSum();
  }, [])

  return (
    <div className="main-page">
      <h2 className="main-page__title">Учет моих расходов</h2>
      <AddForm 
        handleChangeInput={handleChangeInput}
        cost={cost}
        addCost={addCost}
        checkIfEmpty={checkIfEmpty}
        errorInputs={errorInputs}
        totalSum={totalSum}
      />
      <TotalPrice totalSum={totalSum} />
      <div className="costs-container">
        {allCosts.map((cost, index) => (
          cost.isEdit  
            ?  <EditCost
                key={cost.id}
                costToEdit={costToEdit}
                handleChangeCostInfo={handleChangeCostInfo}
                confirmEdit={confirmEdit}
                cancelEdit={cancelEdit}
              />
            : <Cost 
                key={cost.id}
                cost={cost}
                index={index}
                startEdit={startEdit}
                deleteCost={deleteCost}
              />
            )
          )}
      </div>
    </div>
  )
}

export default MainPage;
