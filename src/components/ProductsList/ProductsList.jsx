const ProductsList = () => {
  return (
    <section>
      <ul className="products">
        <li className="product">
          <img className="image" src="https://" alt="" />
          <div className="discr">
            <h3 className="model">iPhone</h3>

            <>
              <span className="price">4000</span>
              <span className="currency">UAH</span>
            </>
          </div>
          <button className="btn-bue" type="button">
            Купити
          </button>
        </li>
      </ul>
    </section>
  );
};

export default ProductsList;
