import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishListProvider = ({children}) => {

    const [wishList,setWishList] = useState(()=>{
        // 'wishlist' here is the key
        const saveWishlistItem = localStorage.getItem('wishlist')
        return saveWishlistItem ? JSON.parse(saveWishlistItem) : [];
    });

    useEffect(()=>{
        //wishList is changing in to string by stringify and saves to localStorage under the key 'wishlist'.
        localStorage.setItem('wishlist',JSON.stringify(wishList));
    },[wishList])


    const addToWishlist =(product)=>{
        const alreadyInTheWishlist = wishList.some((item) => (item.id === product.id))
        if (!alreadyInTheWishlist){

            const updatedWishList = [...wishList, product];
            localStorage.setItem('wishlist',JSON.stringify(updatedWishList));
            setWishList(updatedWishList);
            
        }

        
    }


    const removeFromWishlist =(id)=>{
        const updatedWishList = wishList.filter(item => item.id !== id);
        localStorage.setItem('wishlist',JSON.stringify(updatedWishList));
        setWishList(updatedWishList)
    }

    return(
        <WishlistContext.Provider value={{wishList,addToWishlist,removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )

}