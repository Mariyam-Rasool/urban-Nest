// import styles from './Css/QuantityButton.module.css'
// import { useState } from 'react'

// function QuantityButton() {
      
//   const [productQuantity,setProductQuantity] = useState(1);

//   const decrementHandle = () =>{
//     let decreaseProductQuantity =( productQuantity-1);
//     if (decreaseProductQuantity >= 0) {
//         setProductQuantity(decreaseProductQuantity)
//     }
    
//   }
//   const incrementHandle = () =>{
//     let increaseProductQuantity =( productQuantity+1);
//     setProductQuantity(increaseProductQuantity)
//   }
//   return (
//         <div className={`${styles.quantityDiv} input-group quantity-button`}>
//             <button onClick={decrementHandle} className={`${styles.button} btn btn-outline-secondary`} type="button" id="button-decrement">-</button>
//                 <input type="number" className={`${styles.input} form-control text-center`} value={productQuantity} id="quantity-input" readOnly/>
//             <button onClick={incrementHandle} className={`${styles.button} btn btn-outline-secondary`} type="button" id="button-increment">+</button>
//         </div>
//   )
// }

// export default QuantityButton
import styles from './Css/QuantityButton.module.css';

function QuantityButton({ quantity, setQuantity }) {
    const decrementHandle = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementHandle = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className={`${styles.quantityDiv} input-group quantity-button`}>
            <button onClick={decrementHandle} className={`${styles.button} btn btn-outline-secondary`} type="button">-</button>
            <input type="number" className={`${styles.input} form-control text-center`} value={quantity} readOnly />
            <button onClick={incrementHandle} className={`${styles.button} btn btn-outline-secondary`} type="button">+</button>
        </div>
    );
}

export default QuantityButton;
