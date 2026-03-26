import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (product: any) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (product) => set((state) => {
                const existingItem = state.items.find((item) => item.id === product.id);
                if (existingItem) {
                    return {
                        items: state.items.map((item) =>
                            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                        ),
                    };
                }
                return { items: [...state.items, { ...product, quantity: 1 }] };
            }),
            removeItem: (id) => set((state) => ({
                items: state.items.filter((item) => item.id !== id),
            })),
            clearCart: () => set({ items: [] }),
        }),
        { name: 'shopping-cart' } // This key saves it to LocalStorage automatically!
    )
);