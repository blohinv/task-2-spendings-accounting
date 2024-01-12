import { useState } from "react";
import { uid } from "uid";
import SpendingsInput from "../SpendingsInput";
import AddButton from "../AddButton";
import "./style.scss";

const MainPage = () => {
  const [spending, setSpending] = useState({
    where: '',
    howMuch: '',
    date: Date.now(),
    id: uid()
  });

  const inputHandler = (objKey, value) => {
    setSpending({ ...spending, [objKey]: value });
  }

  const addSpending = () => {
    if (validateInputs()) {
      // localStorage.setItem(`spending-${spending.id}`, JSON.stringify(spending));
      // setSpending({ ...spending, where: '', howMuch: '', id: uid() });
    }
  }

  const validateInputs = () => spending.where !== '' && spending.howMuch !== '';

  return (
    <div className="container">
      <h2 className="container__title">Учет моих расходов</h2>
      <div className="container-add-spending">
      <SpendingsInput
        description={"Куда было потрачено"}
        additionalName={"wide"}
        inputHandler={inputHandler}
        objKey="where"
        value={spending.where}
        textType="text"
      />
      <SpendingsInput
        description={"Сколько было потрачено"}
        additionalName={"average"}
        inputHandler={inputHandler}
        objKey="howMuch"
        value={spending.howMuch}
        textType="number"
      />
      <AddButton action={addSpending} name="Добавить" />
      </div>
    </div>
  )
}

export default MainPage;
