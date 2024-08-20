import { Link } from 'react-router-dom'
import styles from './Css/ProductItems.module.css'


function Products({products}) {
  return (
    <div className={`${styles.containerDiv} container-fluid text-center`}>
        <div  className={`${styles.row} row`}>
           {products.map((items,index)=>(
             <div key={index} className={`${styles.col} col-lg-3 col-md-4 col-sm-6 col-6 mb-4`}>
                <Link className={`${styles.link}`} to={`/product/${items.id}`}>
                  <div className={`${styles.card} card`}>
                      <div className={`${styles.imageDiv}`}>
                      <img id={items.id} src={items.img} className={`${styles.cardImg} card-img-top`} alt="..."/>
                      <button className={`${styles.cartButton} btn-top`}>Add To Cart</button>
                      </div>
                      <div className={`${styles.cardBody} card-body`}>
                          <p className={`${styles.cardText1} card-text`}>{items.pName}</p>
                          {items.pSalePrice ? (
                              <>
                              <p className={`${styles.cardPrice} card-text text-muted`}><s>${items.pPrice}</s></p>
                              <p className={`${styles.cardPrice} card-text text-danger`}>${items.pSalePrice}</p>
                              </>
                            ) :
                            <p className={`${styles.cardPrice} card-text text`}>${items.pPrice}</p>
                            }
                          {/* <p className={`${styles.cardText2} card-text`}>${items.pPrice}</p> */}
                      </div>
                  </div>
                </Link>
            </div>))}
        </div>
    </div>
  )
}

export default Products