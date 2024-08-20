import { useContext, useState } from 'react';
import { WishlistContext } from '../../ContextApi/WishlistContext';
import styles from './Css/ProductDetails.module.css';
import QuantityButton from './QuantityButton';
import { CartContext } from '../../ContextApi/CartContext';
// import newArrivals from '../../Data/HomePage/NewArrivalsData'

function ProductDetails({product}) {
  const {addToWishlist} = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToWishlist = ()=>{
    addToWishlist(product);
  }

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };


  return (
    <div className={`${styles.textDiv} col-md-4 mb-4`}>
          <div className={`${styles.cardText} card`}>
            <div className={`${styles.cardBody} card-body text-center`}>
              
                <h3 className={`${styles.cardTitle} card-title`}>{product.pName}</h3>
                <p className={`${styles.cardDesc} card-text`}>{product.pDescription}</p>
                {product.pSalePrice ? (
                  <>
                   <p className={`${styles.cardPrice} card-text text-muted`}><s>${product.pPrice}</s></p>
                   <p className={`${styles.cardPrice} card-text text-danger`}>${product.pSalePrice}</p>
                   </>
                ) :
                <p className={`${styles.cardPrice} card-text text`}>${product.pPrice}</p>
                }
               
              

               <QuantityButton quantity={quantity} setQuantity={setQuantity} />
              <div className={`${styles.buttonDiv} d-grid gap-2`}>
                <button onClick={handleAddToCart} className={`${styles.button1} btn`}>Add To Cart</button>
                <button onClick={handleAddToWishlist} className={`${styles.button2} btn`}>Wishlist</button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProductDetails
// function ProductDetails({product}) {
//   const {addToWishlist} = useContext(WishlistContext);
//   const {addToCart} = useContext(CartContext);

//   const handleAddToWishlist = ()=>{
//     addToWishlist(product);
//   }
//   const handleAddToCart = () => {
//     addToCart(product)
//   }

//   return (
//     <div className={`${styles.textDiv} col-md-4 mb-4`}>
//           <div className={`${styles.cardText} card`}>
//             <div className={`${styles.cardBody} card-body text-center`}>
              
//                 <h3 className={`${styles.cardTitle} card-title`}>{product.pName}</h3>
//                 <p className={`${styles.cardDesc} card-text`}>{product.pDescription}</p>
//                 {product.pSalePrice ? (
//                   <>
//                    <p className={`${styles.cardPrice} card-text text-muted`}><s>{product.pSalePrice}</s></p>
//                    <p className={`${styles.cardPrice} card-text text-danger`}>{product.pPrice}</p>
//                    </>
//                 ) :
//                 <p className={`${styles.cardPrice} card-text text-danger`}>{product.pPrice}</p>
//                 }
               
              

//               <QuantityButton></QuantityButton>

//               <div className={`${styles.buttonDiv} d-grid gap-2`}>
//                 <button onClick={handleAddToCart} className={`${styles.button1} btn`}>Add To Cart</button>
//                 <button onClick={handleAddToWishlist} className={`${styles.button2} btn`}>Wishlist</button>
//               </div>
//             </div>
//           </div>
//         </div>
//   )
// }

// export default ProductDetails