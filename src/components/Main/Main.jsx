import Filter from 'components/Filter/Filter';
import ProductsList from 'components/ProductsList/ProductsList';
import products from '../../data/products.json';
import FilterOptions from '../../data/data-filter.json'




const Main = () => {
  return (
    <main style={{display:"flex", justifyContent:"center"}}>
      {/* <Filter options={FilterOptions} /> */}
      <ProductsList products = {products}/>
    </main>
  );
};

export default Main;
