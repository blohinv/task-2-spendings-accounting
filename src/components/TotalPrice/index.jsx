import "./style.scss";

const TotalPrice = ({ totalSum }) => {
  return (
    <p className="total-price">{`Итого: ${totalSum} р.`}</p>
  )
}

export default TotalPrice;
