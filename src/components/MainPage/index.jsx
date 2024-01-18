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
    setCost({ ...cost, [name]: value });
  }

  const handleChangeCostInfo = (key, value) => {
    setCostToEdit({ ...costToEdit, [key]: value });
  }

  const getAllCosts = () => {
    setAllCosts([ ...Object.values(localStorage).map(value => JSON.parse(value))]);
  }

  const addCost = () => {
    errorInputs.forEach(() => {
      errorInputs.pop();
    });

    cost.howMuchSpent = Number(cost.howMuchSpent);
    cost.whenSpent = Date.now();

    checkIfEmpty();

    if (errorInputs.length === 0) {
      setAllCosts([...allCosts, cost]);
      localStorage.setItem(`spending-${cost.id}`, JSON.stringify(cost));
      setCost({ 
        ...cost, 
        whereSpent: '', 
        howMuchSpent: '', 
        id: uid() 
      });
    }

    calculateTotalSum();
  }

  const startEdit = (cost) => {
    if (allCosts.findIndex(currentCost => currentCost.isEdit) !== -1) {
      return;
    }

    let costIndex = allCosts.findIndex(currentCost => currentCost.id === cost.id);

    if (costIndex === -1) {
      return;
    }

    allCosts[costIndex].isEdit = true;

    const dateConvertor = convertDate(cost.whenSpent);
    const dateWhenSpent = dateConvertor.year + '-' + dateConvertor.month + '-' + dateConvertor.day;

    cost.whenSpent = dateWhenSpent;

    setCostToEdit(cost);
  }

  const confirmEdit = (cost) => {
    if (costToEdit.whereSpent
      && costToEdit.whenSpent
      && costToEdit.howMuchSpent > 0
    ) {
      let costIndex = allCosts.findIndex(currentCost => currentCost.id === cost.id);

      if (costIndex === -1) {
        return;
      }

      allCosts[costIndex] = cost;
      allCosts[costIndex].isEdit = false;
      allCosts[costIndex].whenSpent = new Date(cost.whenSpent).getTime();

      setCostToEdit({ ...costToEdit, isEdit: false });
      
      localStorage.setItem(`spending-${cost.id}`, JSON.stringify(cost));

      calculateTotalSum();
    }
  }

  const cancelEdit = (costToCancel) => {
    let costIndex = allCosts.findIndex(currentCost => currentCost.id === costToCancel.id);

    if (costIndex === -1) {
      return;
    }

    allCosts[costIndex].isEdit = false;
    setCostToEdit({ ...costToEdit, isEdit: false });
  }

  const deleteCost = (id) => {
    setAllCosts(allCosts.filter(cost => cost.id !== id));
    localStorage.removeItem(`spending-${id}`);

    calculateTotalSum();
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
    setTotalSum([ ...Object.values(localStorage).map(value => JSON.parse(value))]
    .reduce((a, b) => a = a + Number(b.howMuchSpent), 0));
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
      <div className="main-page-costs-container">
        {allCosts.map((cost, index) => (
          cost.isEdit  
            ? <EditCost
                key={`edit-${cost.id}`}
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
