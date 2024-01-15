import { useState, useEffect } from "react";
import { uid } from "uid";
import AddForm from "../AddForm";
import "./style.scss";

const MainPage = () => {
  const [cost, setCost] = useState({
    whereSpent: '',
    howMuchSpent: '',
    date: Date.now(),
    id: uid()
  });
  const [errorInputs, setErrorInputs] = useState([]);

  const handleChangeInput = (name, value) => {
    setCost({ ...cost, [name]: value });
  }

  const addCost = () => {
    errorInputs.forEach(() => {
      errorInputs.pop();
    });
    checkIfEmpty();
    if (errorInputs.length === 0) {
      localStorage.setItem(`spending-${cost.id}`, JSON.stringify(cost));
      setCost({ 
        ...cost, 
        whereSpent: '', 
        howMuchSpent: '', 
        id: uid() 
      });
    }
  }

  const checkIfEmpty = () => {
    if (!cost['whereSpent']) {
      errorInputs.push('whereSpent')
    }

    if (cost['howMuchSpent'] <= 0) {
      errorInputs.push('howMuchSpent');
    }

    setErrorInputs([ ...errorInputs ]);
  }

  return (
    <div className="main-page">
      <h2 className="main-page__title">Учет моих расходов</h2>
      <AddForm 
        handleChangeInput={handleChangeInput}
        cost={cost}
        addCost={addCost}
        checkIfEmpty={checkIfEmpty}
        errorInputs={errorInputs}
      />
    </div>
  )
}

export default MainPage;
