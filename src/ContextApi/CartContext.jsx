import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Load cart from localStorage if available
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cartItem');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    

    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(cart));
            
    }, [cart]);
    

    const addToCart = (product, pQuantity = 1) => {
        const pPrice = parseFloat(product.pPrice);
        const pSalePrice = parseFloat(product.pSalePrice);
        const price = pSalePrice || pPrice;

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + pQuantity, totalPrice: (item.quantity + pQuantity) * price }
                    : item
            );
            setCart(updatedCart);
        } else {
            const newCartItem = {
                id: product.id,
                name: product.pName,
                price: price,
                quantity: pQuantity,
                totalPrice: pQuantity * price,
                image: product.img,
            };
            setCart([...cart, newCartItem]);
        }
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
        } else {
            const updatedCart = cart.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity, totalPrice: newQuantity * item.price }
                    : item
            );
            setCart(updatedCart);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    const getTotalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.totalPrice, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, getTotalItems, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
