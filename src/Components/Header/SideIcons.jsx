import { NavLink } from 'react-router-dom';
// import { navBarIcons } from '../../Data/HeaderData';
import { useContext } from 'react';
import { GoPerson } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { WishlistContext } from '../../ContextApi/WishlistContext';
import styles from './Css/SideIcons.module.css';
import { CartContext } from '../../ContextApi/CartContext';


function SideIcons() {
  const {wishList} = useContext(WishlistContext);
  const {cart} = useContext(CartContext);
  return (
    <div>
      <ul className={`${styles.sideBar} navbar-nav  mb-2 mb-lg-0`}>
          
            <li className={`${styles.navItem} nav-item `}>
            <NavLink className={`${styles.navLink} nav-link active`} to="#"><GoPerson/></NavLink>
            <NavLink className={`${styles.navLink} ${styles.wishlist} nav-link active`} to='/wishlist'>
              {wishList.length === 0 ?(
                   <span></span>
                  ):
                  (<span className={`${styles.wishlistDot}`}></span>)
              
              }
            <IoMdHeartEmpty className={`${styles.wishlistIcon}`}/>
            </NavLink>
            <NavLink className={`${styles.navLink} nav-link active`} to='/cart'>
            {cart.length === 0 ?(
                   <span></span>
                  ):
                  (<span className={`${styles.wishlistDot}`}></span>)
              
              }
            <PiShoppingBag className={`${styles.wishlistIcon}`}/>
            </NavLink>
        </li>

        </ul>
    </div>
  )
}

export default SideIcons