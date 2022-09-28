

import styles from "./ProductsList.module.css"
import ProductsListItem from '../ProductsListItem/ProductsListItem';
const ProductsList = props => {
  const { products } = props;
  return (
    <section>
      <ul className={styles.products}>
        {products.map((el) => (
          <ProductsListItem
            key={el.id}
            // url={el.url}
            // model={el.model}
            // price={el.price}
            // currency={el.currency}
            {...el}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductsList;
