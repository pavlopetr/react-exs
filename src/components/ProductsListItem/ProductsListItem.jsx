const ProductsListItem = ({url, model, price, currency}) => {
  return (
    <li className="product">
      <img className="image" src={url} alt={model} />
      <div className="discr">
        <h3 className="model">{model}</h3>

        <>
          <span className={'price'}>{price}</span>
          <span className="currency">{currency}</span>
        </>
      </div>
      <button className="btn-bue" type="button">
        Купити
      </button>
    </li>
  );
};

export default ProductsListItem;
