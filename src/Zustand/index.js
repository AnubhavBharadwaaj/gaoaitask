import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import create from 'zustand';

export const useStore = create(set => ({
    items: [],
    itemCount: {},
    addItem: (item) => set(state => ({
        items: [...state.items, item]
        
    })),
    removeItem: (id) => set(state => ({
        items: state.items.filter((num, i, arr) => {
            if(num.id === id) {
                return null;
            } else {
                return num;
            }
        })
    }))
}))