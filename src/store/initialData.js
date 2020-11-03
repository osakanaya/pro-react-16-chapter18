import { PRODUCTS, SUPPLIERS } from "./dataTypes";

export const initialData = {
    modelData: {
        [PRODUCTS]: [
            { id: 1, name: "Kayak", category: "Watersports", price: 275 },
            { id: 2, name: "Lifejacket", category: "Watersports", price: 48.95 },
            { id: 3, name: "Soccer Ball", category: "Soccer", price: 19.50 }
        ],
        [SUPPLIERS]: [
            { id: 1, name: "Surf Dudes", city: "San Jose", products: [1, 2] },
            { id: 2, name: "Field Supplies", city: "New York", products: [3] },
        ]
    },
    stateData: {
        editing: false,
        selectedId: -1,
        selectedType: PRODUCTS
    }
};