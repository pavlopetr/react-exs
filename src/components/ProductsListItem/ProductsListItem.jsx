import styles from "./ProductsListItem.module.css"
const ProductsListItem = ({url, model, price, currency}) => {
  return (
    <li className={styles.product}>
      <img className="image" src={url} alt={model} />
      <div className={styles.descr}>
        <h3 className={styles.model}>{model}</h3>

        <>
          <span className={'price'}>{price}</span>
          <span className="currency">{currency}</span>
        </>
      </div>
      <button className={styles.btnBue} type="button">
        Купити
      </button>
    </li>
  );
};

export default ProductsListItem;
