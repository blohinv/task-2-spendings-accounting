import "./style.scss";

const TotalPrice = ({ totalSum }) => {
  return (
    <p className="total-cost">{`Итого: ${totalSum} р.`}</p>
  )
}

export default TotalPrice;
