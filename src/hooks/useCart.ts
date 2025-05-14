import { useCartStore } from "../store/cartStore";

const useCart = () => {
    const { cart, addItem, removeItem, clearCart, totalItems } = useCartStore();

    return {
        cart,
        totalItems,
        addItem,
        removeItem,
        clearCart,
    };
};



