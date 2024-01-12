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
    checkIfEmpty(['whereSpent', 'howMuchSpent']);
    if (errorInputs.length === 0) {
      localStorage.setItem(`spending-${cost.id}`, JSON.stringify(cost));
      setCost({ ...cost, whereSpent: '', howMuchSpent: '', id: uid() });
    }
  }

  const checkIfEmpty = (names) => {
    names.forEach(name => {
      if (cost[name]  === '') {
        errorInputs.push(name);
        setErrorInputs([ ...errorInputs ]);
      }
    })
  }

  return (
    <div className="container">
      <h2 className="container__title">Учет моих расходов</h2>
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
