import { useState, useEffect } from "react";
import { uid } from "uid";
import AddForm from "../AddForm";
import TotalCost from "../TotalCost";
import "./style.scss";

const MainPage = () => {
  const [cost, setCost] = useState({
    whereSpent: '',
    howMuchSpent: '',
    creationDate: Date.now(),
    id: uid()
  });
  const [allCosts, setAllCosts] = useState([]);
  const [errorInputs, setErrorInputs] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const handleChangeInput = (name, value) => {
    setCost({ ...cost, [name]: value, creationDate: Date.now() });
  }

  const getAllCosts = () => {
    setAllCosts([ ...Object.values(localStorage).map(value => JSON.parse(value))]);
  }

  const addCost = () => {
    errorInputs.forEach(() => {
      errorInputs.pop();
    });

    checkIfEmpty(['whereSpent', 'howMuchSpent']);

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

  const calculateTotalSum = () => {
    setTotalSum(allCosts.reduce((a, b) => a = a + Number(b.howMuchSpent), 0));
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
      <TotalCost totalSum={totalSum} />
    </div>
  )
}

export default MainPage;
