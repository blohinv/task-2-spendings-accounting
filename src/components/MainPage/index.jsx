import { useState, useEffect } from "react";
import { uid } from "uid";
import AddForm from "../AddForm";
import TotalPrice from "../TotalPrice";
import Cost from "../Cost";
import "./style.scss";

const MainPage = () => {
  const [cost, setCost] = useState({
    whereSpent: '',
    howMuchSpent: '',
    whenSpent: Date.now(),
    isEdit: false,
    id: uid()
  });
  const [allCosts, setAllCosts] = useState([]);
  const [errorInputs, setErrorInputs] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeInput = (name, value) => {
    setCost({ ...cost, [name]: value, whenSpent: Date.now() });
    console.log(allCosts);
  }

  const getAllCosts = () => {
    setAllCosts([ ...Object.values(localStorage).map(value => JSON.parse(value))]);
  }

  const addCost = () => {
    errorInputs.forEach(() => {
      errorInputs.pop();
    });

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

  const startEdit = () => {
    setIsEdit(true);
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
          <Cost 
            key={cost.id}
            cost={cost}
            index={index}
            startEdit={startEdit}
          />
        ))}
      </div>
    </div>
  )
}

export default MainPage;
