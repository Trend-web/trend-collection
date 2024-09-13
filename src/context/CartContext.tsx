'use client';
import { useState, createContext, useContext, ReactNode } from "react";
interface CartItem{
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartContextType{
    items: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: string) => void;
    clearCart:() => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (item: Omit<CartItem, 'quantity'>) => {

        setItems((prevItems) => {
            const existingItem = prevItems.find((i)=> i.id === item.id);
            if(existingItem){
                return prevItems.map((i) =>
                i.id==item.id?{...i, quantity: i.quantity + 1}: i
                );
            }
            return[...prevItems, {...item, quantity: 1}];
        });
    };

    const removeFromCart = (id: string) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === id);
            if (existingItem && existingItem.quantity > 1) {
                // If quantity > 1, decrease the quantity
                return prevItems.map((i) =>
                    i.id === id ? { ...i, quantity: i.quantity - 1 } : i
                );
            } else {
                // If quantity is 1 or item not found, remove the item
                return prevItems.filter((i) => i.id !== id);
            }
        });
    };

    const clearCart = () =>{
        setItems([]);
    }

    return(
        <CartContext.Provider value={{items, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if(context === undefined) {
        throw new Error('the Cart can only be used within a CartProvider');
    }
    return context;
}