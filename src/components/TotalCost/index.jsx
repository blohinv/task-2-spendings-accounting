import "./style.scss";

const TotalCost = ({ totalSum }) => {
  return (
    <p className="total-cost">{`Итого: ${totalSum} р.`}</p>
  )
}

export default TotalCost;
