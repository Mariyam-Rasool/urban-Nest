
import { useParams } from 'react-router-dom';
import styles from './Css/SingleProduct.module.css';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import { newArrivals } from '../../Data/HomePage/NewArrivalsData';


function SingleProduct() {
  const {id} = useParams();
  const product = newArrivals.find(item => item.id === parseInt(id));
  return (
    <div className={`${styles.containerDiv} container`}>
      <div className={`${styles.row} row align-items-center`}>
      <ProductImage img={product.img}></ProductImage>
      <ProductDetails product={product}></ProductDetails>
      </div>
    </div>
  );
}

export default SingleProduct;
