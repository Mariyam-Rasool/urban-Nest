// import {newArrivals} from "../../Data/HomePage/NewArrivalsData"
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../ContextApi/WishlistContext';
import styles from './WishList.module.css';

function WishList() {
  const {wishList,removeFromWishlist} = useContext(WishlistContext);
  

  return (

    <div className={`${styles.containerDiv} container text-center`}>
        <div className={styles.Heading}>WishList</div>
       
          

            {wishList.length === 0 ?
             (
              <div>
                <p className={styles.para}>Your wishlist looks lonely. Browse our collections to fill it up.</p>
                <Link to='/products/all' className={`${styles.link}`}>
                   <button className={`${styles.button} btn`}>Explore</button>
                </Link>
              </div>
            ):
             (<div  className={`${styles.row} row`}>
               { wishList.map((items,index)=>(
                 <div key={index} className={`${styles.col} col-lg-2 col-md-4 col-sm-6 col-6 mb-4`}>
                     <div className={styles.cardWrapper}>
                <button className={styles.closeButton} onClick={() => removeFromWishlist(items.id)}> &times; </button>
                      <Link className={`${styles.link}`}  to={`/product/${items.id}`}>
                        <div  className={`${styles.card} card`}>
                          <img src={items.img} className={`${styles.cardImg} card-img-top`} alt="product image"/>
                          <div className={`${styles.cardBody} card-body`}>
                              <p className={`${styles.cardText} card-text`}>{items.pName}</p>
                              {items.pSalePrice ? (
                              <>
                                <p className={`${styles.cardText} card-text text-muted`}>${items.pPrice}</p>
                                <p className={`${styles.cardText} card-text text-danger`}>${items.pSalePrice}</p>
                              </>)
                              :
                              <p className={`${styles.cardText} card-text`}>${items.pPrice}</p>
                              
                              }
                              
                          </div>
                        </div>
                      </Link>
                   
                </div>
                </div>
               ))}
              </div>

              )}

    </div>

  )
}

export default WishList