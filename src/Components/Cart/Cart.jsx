import { useContext } from 'react';
import { CartContext } from '../../ContextApi/CartContext';
import { MdDeleteOutline } from "react-icons/md";
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';

function Cart() {
    
    const { cart, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useContext(CartContext);

// Check if cart is an array
if (!Array.isArray(cart)) {
    console.error("Cart is not an array:", cart);
    return <div style={{margin:"200px"}}>Error: Cart is not an array.</div>;
}
    return (
        <div className={`${styles.container} container`}>
            <div className={`${styles.heading}`}>SHOPPING CART</div>
            {cart.length === 0 ? (
              <div className={`${styles.emptyMessageDiv}`}>
                  <p className={`${styles.emptyMessage}`}>Your cart is as empty as a room before the furniture arrives!</p>
                <Link to='/products/all' className={`${styles.link}`}>
                    <button className={`${styles.button} btn`}>Explore</button>
                </Link>
              </div>
      ) : (
        <>
            <div className={`${styles.cartItems} row`}>
                {cart.map(item => (
                    <div key={item.id} className={`${styles.cartItem} col-12 mb-3`}>
                       
                            <div className={`${styles.cartItemContent} row`}>
                            <Link className={`${styles.link} ${styles.imageContainer} col-md-1`}  to={`/product/${item.id}`}>
                                {/* <div className={``}> */}
                                    <img src={item.image} alt='' className={`${styles.productImage}`} />
                                {/* </div> */}
                            </Link>
                                <div className={`${styles.detailsContainer} col-md-6 col-6`}>
                                    <Link className={`${styles.link} ${styles.productName} col-6`} to={`/product/${item.id}`}>{item.name}</Link>
                                    <div className={`${styles.quantityContainer} col-4`}>
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className={`${styles.quantityButton} ${styles.quantityButton1}`}>-</button>
                                        <span className={`${styles.quantityNumber}`}>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className={`${styles.quantityButton} ${styles.quantityButton2}`}>+</button>
                                    </div>
                                    <p className={`${styles.productPrice} col-2`}>${item.totalPrice}</p>
                                </div>
                                <div className={`${styles.deleteContainer} col-md-3 col-6`}>
                                    <button onClick={() => removeFromCart(item.id)} className={`${styles.deleteButton}`}>
                                        <MdDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        
                    </div>
                ))}
            </div>
            <div className={`${styles.checkoutContainer} row col-12`}>
                <div className={`${styles.summary} col-12`}>
                    <div className={`${styles.paraDiv}`}>
                        <p className={`${styles.para}`}>Total Items: </p>
                        <p className={`${styles.para}`}>{getTotalItems()}</p>
                    </div>
                    <div className={`${styles.paraDiv}`}>
                        <p className={`${styles.para}`}>Total Price: </p>
                        <p className={`${styles.para}`}>${getTotalPrice()}</p>
                    </div>
                    <button className={`${styles.checkoutButton}`}>Checkout</button>
                </div>
            </div>
            </>
      )}
        </div>
    );
}

export default Cart;
