import styles from './Css/ProductImage.module.css'
// import image from '../../assets/NewArrivals/na1.png';
// import newArrivals from '../../Data/HomePage/NewArrivalsData'

function ProductImage({img}) {

  return (
    <div className={`${styles.imageDiv} col-lg-5  mb-4`}>
         
            <div className={`${styles.cardImg} card`}>
              <img src={img} className="card-img-top" alt="Bar Stool" />
            </div>

        </div>
  )
}

export default ProductImage